import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {
    getAllUsersDb,
    getUserByEmailDb,
    createUserDb,
    updateUserDb,
    deleteUserDb
} from '../../models/superadmin/saUserModel.js';
import { logActivityDb } from '../../models/superadmin/saAdminModel.js'; 

export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await getAllUsersDb();
        res.status(200).json({ success: true, data: users });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, employee_id, phone, email, dependent_type, location, pincode, password, status, permissions } = req.body;

        if (!name || !email || !password || !phone || !dependent_type) {
            res.status(400).json({ success: false, message: 'Missing required fields' });
            return;
        }

        const emailFormatted = email.toLowerCase().trim();
        const existing = await getUserByEmailDb(emailFormatted);

        if (existing.length > 0) {
            res.status(400).json({ success: false, message: 'A user with this email already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await createUserDb({
            name, employee_id, phone, email: emailFormatted, dependent_type, 
            location, pincode, status: status || 'Active', permissions
        }, hashedPassword);

        await logActivityDb('Super Admin', `Onboarded new User: ${name}`, 'Super Admin');

        res.status(201).json({ success: true, message: 'User onboarded successfully', data: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        const { name, employee_id, phone, email, dependent_type, location, pincode, password, status, permissions } = req.body;

        if (!name || !email) {
            res.status(400).json({ success: false, message: 'Name and email are required' });
            return;
        }

        const emailFormatted = email.toLowerCase().trim();
        const existing = await getUserByEmailDb(emailFormatted, id);

        if (existing.length > 0) {
            res.status(400).json({ success: false, message: 'This email is already in use' });
            return;
        }

        let hashedPassword: string | undefined;
        if (password && password.trim() !== '') {
            hashedPassword = await bcrypt.hash(password.trim(), 10);
        }

        const updatedUser = await updateUserDb(id, {
            name, employee_id, phone, email: emailFormatted, dependent_type, 
            location, pincode, status, permissions
        }, hashedPassword);

        if (!updatedUser) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }

        await logActivityDb('Super Admin', `Updated details for user ${name}`, 'Super Admin');

        res.status(200).json({ success: true, message: 'User updated successfully', data: updatedUser });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        const deleted = await deleteUserDb(id);

        if (!deleted) {
            res.status(404).json({ success: false, message: 'User not found' });
            return;
        }

        await logActivityDb('Super Admin', `Deleted User: ${deleted.name}`, 'Super Admin');

        res.status(200).json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};