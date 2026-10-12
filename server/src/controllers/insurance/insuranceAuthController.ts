import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getBrokerForAuthDb } from '../../models/insurance/insuranceAuthModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'zorocare_superadmin_secret_key'; 

export const insuranceLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        const broker = await getBrokerForAuthDb(email);

        if (!broker) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        if (broker.status !== 'Active') {
            res.status(403).json({ success: false, message: 'Your account is blocked. Please contact the administrator.' });
            return;
        }
        
        const isMatch = await bcrypt.compare(password, broker.password);

        if (!isMatch) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        // Generate JWT Token
        const token = jwt.sign(
            { 
                id: broker.id, 
                email: broker.email, 
                role: 'Insurance Broker',
                permissions: broker.permissions 
            },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            success: true,
            message: 'Broker login successful',
            token,
            user: {
                id: broker.id,
                name: broker.name,
                spoc_name: broker.spoc_name,
                email: broker.email,
                role: 'Insurance Broker',
                logo_url: broker.logo_url,
                permissions: broker.permissions
            }
        });
    } catch (error) {
        console.error('Insurance Login Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
};