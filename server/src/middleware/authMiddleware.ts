import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Ensure this matches the explicit .env secret
const JWT_SECRET = process.env.JWT_SECRET as string;

// Extend the Express Request interface to hold the decoded token payload
export interface AuthenticatedRequest extends Request {
    user?: any;
}

export const authenticateJWT = (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ success: false, message: 'Access denied. No token provided.' });
        return;
    }

    const token = authHeader.split(' ')[1];

    if (!JWT_SECRET) {
        console.error('FATAL ERROR: JWT_SECRET is not defined.');
        res.status(500).json({ success: false, message: 'Server configuration error.' });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach the payload (id, email, role, permissions) to the request object
        next();
    } catch (err) {
        res.status(403).json({ success: false, message: 'Invalid or expired token.' });
    }
};

// Optional: Role-based authorization middleware
export const requireRole = (roles: string[]) => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction): void => {
        if (!req.user || !roles.includes(req.user.role)) {
            res.status(403).json({ success: false, message: 'Forbidden. Insufficient permissions.' });
            return;
        }
        next();
    };
};