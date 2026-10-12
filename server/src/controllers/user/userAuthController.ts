import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getUserForAuthDb } from '../../models/user/userAuthModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'zorocare_superadmin_secret_key'; 

export const userLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        const user = await getUserForAuthDb(email);

        if (!user) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        if (user.status !== 'Active') {
            res.status(403).json({ success: false, message: 'Your account is blocked. Please contact support.' });
            return;
        }
        
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        // Generate JWT Token
        const token = jwt.sign(
            { 
                id: user.id, 
                email: user.email, 
                role: 'User',
                type: user.type, // e.g., 'Corporate', 'Insurance', 'Direct'
                permissions: user.permissions 
            },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            success: true,
            message: 'User login successful',
            token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phone: user.phone,
                role: 'User',
                type: user.type,
                organization: user.organization,
                permissions: user.permissions
            }
        });
    } catch (error) {
        console.error('User Login Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
};