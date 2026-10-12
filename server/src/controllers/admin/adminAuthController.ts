import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { getAdminForAuthDb, updateAdminLastLoginDb } from '../../models/admin/adminAuthModel.js';

const JWT_SECRET = process.env.JWT_SECRET || 'zorocare_superadmin_secret_key'; 

export const adminLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        const admin = await getAdminForAuthDb(email);

        if (!admin) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        if (admin.status !== 'Active') {
            res.status(403).json({ success: false, message: 'Your account is inactive. Please contact the Super Admin.' });
            return;
        }
        
        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        // Update the last_login timestamp in the database
        await updateAdminLastLoginDb(admin.id);

        // Generate JWT Token including role and permissions
        const token = jwt.sign(
            { 
                id: admin.id, 
                email: admin.email, 
                role: admin.role,
                permissions: admin.permissions 
            },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            success: true,
            message: 'Admin login successful',
            token,
            user: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
                role: admin.role,
                permissions: admin.permissions
            }
        });
    } catch (error) {
        console.error('Admin Login Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
};