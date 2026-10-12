import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../../config/db.js';

const JWT_SECRET = process.env.JWT_SECRET || 'zorocare_superadmin_secret_key';

export const superAdminLogin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400).json({ success: false, message: 'Email and password are required' });
            return;
        }

        const result = await pool.query(
            'SELECT * FROM super_admins WHERE email = $1 LIMIT 1',
            [email.toLowerCase().trim()]
        );

        if (result.rows.length === 0) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        const admin = result.rows[0];

        const isMatch = await bcrypt.compare(password, admin.password);

        if (!isMatch) {
            res.status(401).json({ success: false, message: 'Invalid email or password.' });
            return;
        }

        const token = jwt.sign(
            { id: admin.id, email: admin.email, role: admin.role },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            success: true,
            message: 'Super Admin login successful',
            token,
            user: {
                id: admin.id,
                email: admin.email,
                name: admin.name,
                role: admin.role,
            }
        });
    } catch (error) {
        console.error('Super Admin Login Error:', error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
    }
};