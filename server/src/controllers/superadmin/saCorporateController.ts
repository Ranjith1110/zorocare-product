import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {
    getAllCorporatesDb,
    getCorporateByEmailDb,
    createCorporateDb,
    updateCorporateDb,
    deleteCorporateDb
} from '../../models/superadmin/saCorporateModel.js';
import { logActivityDb } from '../../models/superadmin/saAdminModel.js'; 

export const getCorporates = async (req: Request, res: Response): Promise<void> => {
    try {
        const corporates = await getAllCorporatesDb();
        res.status(200).json({ success: true, data: corporates });
    } catch (error) {
        console.error('Error fetching corporates:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const createCorporate = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, spoc_name, email, contact, location, employee_count, logo_url, password, status, permissions } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ success: false, message: 'Name, email, and password are required' });
            return;
        }

        const emailFormatted = email.toLowerCase().trim();
        const existing = await getCorporateByEmailDb(emailFormatted);

        if (existing.length > 0) {
            res.status(400).json({ success: false, message: 'A corporate with this email already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newCorporate = await createCorporateDb({
            name, spoc_name: spoc_name || '', email: emailFormatted, contact: contact || '', 
            location: location || '', employee_count: employee_count || '0', 
            logo_url, status: status || 'Active', permissions: permissions || {}
        }, hashedPassword);

        await logActivityDb('Super Admin', `Onboarded new Corporate: ${name}`, 'Super Admin');

        res.status(201).json({ success: true, message: 'Corporate onboarded successfully', data: newCorporate });
    } catch (error) {
        console.error('Error creating corporate:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const updateCorporate = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        // FIXED: Extract logo_url from req.body
        const { name, spoc_name, email, contact, location, employee_count, password, status, permissions, logo_url } = req.body;

        if (!name || !email) {
            res.status(400).json({ success: false, message: 'Name and email are required' });
            return;
        }

        const emailFormatted = email.toLowerCase().trim();
        const existing = await getCorporateByEmailDb(emailFormatted, id);

        if (existing.length > 0) {
            res.status(400).json({ success: false, message: 'This email is already in use' });
            return;
        }

        let hashedPassword: string | undefined;
        let passwordUpdated = false;
        if (password && password.trim() !== '') {
            hashedPassword = await bcrypt.hash(password.trim(), 10);
            passwordUpdated = true;
        }

        // FIXED: Pass logo_url to updateCorporateDb payload
        const updatedCorporate = await updateCorporateDb(id, {
            name, spoc_name: spoc_name || '', email: emailFormatted, contact: contact || '', 
            location: location || '', employee_count: employee_count || '0', 
            status, permissions, logo_url
        }, hashedPassword);

        if (!updatedCorporate) {
            res.status(404).json({ success: false, message: 'Corporate not found' });
            return;
        }

        const actionText = passwordUpdated 
            ? `Updated credentials & details for corporate ${name}`
            : `Updated details for corporate ${name}`;
        await logActivityDb('Super Admin', actionText, 'Super Admin');

        res.status(200).json({ success: true, message: 'Corporate updated successfully', data: updatedCorporate });
    } catch (error) {
        console.error('Error updating corporate:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const deleteCorporate = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        const deleted = await deleteCorporateDb(id);

        if (!deleted) {
            res.status(404).json({ success: false, message: 'Corporate not found' });
            return;
        }

        await logActivityDb('Super Admin', `Deleted Corporate: ${deleted.name}`, 'Super Admin');

        res.status(200).json({ success: true, message: 'Corporate deleted successfully' });
    } catch (error) {
        console.error('Error deleting corporate:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};