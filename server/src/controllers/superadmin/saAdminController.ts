import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {
    getAllAdminsDb,
    getAdminByEmailDb,
    createAdminDb,
    updateAdminDb,
    deleteAdminDb,
    getRecentActivitiesDb,
    logActivityDb
} from '../../models/superadmin/saAdminModel.js';

export const getAdmins = async (req: Request, res: Response): Promise<void> => {
    try {
        const admins = await getAllAdminsDb();
        res.status(200).json({ success: true, data: admins });
    } catch (error) {
        console.error('Error fetching admins:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const getSecurityActivities = async (_req: Request, res: Response): Promise<void> => {
    try {
        const activities = await getRecentActivitiesDb();
        res.status(200).json({ success: true, data: activities });
    } catch (error) {
        console.error('Error fetching security activities:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const createAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, phone, password, role, status, permissions } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ success: false, message: 'Name, email, and password are required' });
            return;
        }

        const emailFormatted = email.toLowerCase().trim();
        const existing = await getAdminByEmailDb(emailFormatted);

        if (existing.length > 0) {
            res.status(400).json({ success: false, message: 'An admin with this email already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await createAdminDb({
            name,
            email: emailFormatted,
            phone: phone || '',
            role: role || 'Admin',
            status: status || 'Active',
            permissions: permissions || {}
        }, hashedPassword);

        // Record real security activity
        await logActivityDb('Super Admin', `Created admin credentials for ${name} (${emailFormatted})`, 'Super Admin');

        res.status(201).json({ success: true, message: 'Admin created successfully', data: newAdmin });
    } catch (error) {
        console.error('Error creating admin:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const updateAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        const { name, email, phone, password, role, status, permissions } = req.body;

        if (!name || !email) {
            res.status(400).json({ success: false, message: 'Name and email are required' });
            return;
        }

        const emailFormatted = email.toLowerCase().trim();
        const existing = await getAdminByEmailDb(emailFormatted, id);

        if (existing.length > 0) {
            res.status(400).json({ success: false, message: 'This email is already in use by another admin' });
            return;
        }

        let hashedPassword: string | undefined;
        let passwordUpdated = false;
        if (password && password.trim() !== '') {
            hashedPassword = await bcrypt.hash(password.trim(), 10);
            passwordUpdated = true;
        }

        const updatedAdmin = await updateAdminDb(id, {
            name,
            email: emailFormatted,
            phone: phone || '',
            role,
            status,
            permissions
        }, hashedPassword);

        if (!updatedAdmin) {
            res.status(404).json({ success: false, message: 'Admin not found' });
            return;
        }

        // Record security activity
        const actionText = passwordUpdated 
            ? `Updated credentials & module permissions for ${name}`
            : `Updated module permissions for ${name}`;
        await logActivityDb('Super Admin', actionText, 'Super Admin');

        res.status(200).json({ success: true, message: 'Admin updated successfully', data: updatedAdmin });
    } catch (error) {
        console.error('Error updating admin:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const deleteAdmin = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        const deleted = await deleteAdminDb(id);

        if (!deleted) {
            res.status(404).json({ success: false, message: 'Admin not found' });
            return;
        }

        await logActivityDb('Super Admin', `Deleted admin account for ${deleted.name} (${deleted.email})`, 'Super Admin');

        res.status(200).json({ success: true, message: 'Admin deleted successfully' });
    } catch (error) {
        console.error('Error deleting admin:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};