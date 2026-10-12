import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getCorporateForAuthDb } from '../../models/corporate/corporateAuthModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'zorocare_superadmin_secret_key'; 

export const corporateLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        const corporate = await getCorporateForAuthDb(email);

        if (!corporate) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        if (corporate.status !== 'Active') {
            res.status(403).json({ success: false, message: 'Your corporate account is blocked. Please contact the administrator.' });
            return;
        }
        
        const isMatch = await bcrypt.compare(password, corporate.password);

        if (!isMatch) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        // Generate JWT Token
        const token = jwt.sign(
            { 
                id: corporate.id, 
                email: corporate.email, 
                role: 'Corporate',
                permissions: corporate.permissions 
            },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            success: true,
            message: 'Corporate login successful',
            token,
            user: {
                id: corporate.id,
                name: corporate.name,
                spoc_name: corporate.spoc_name,
                email: corporate.email,
                role: 'Corporate',
                logo_url: corporate.logo_url,
                permissions: corporate.permissions
            }
        });
    } catch (error) {
        console.error('Corporate Login Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
};