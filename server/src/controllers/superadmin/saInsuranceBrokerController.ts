import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import {
    getAllBrokersDb,
    getBrokerByEmailDb,
    createBrokerDb,
    updateBrokerDb,
    deleteBrokerDb
} from '../../models/superadmin/saInsuranceBrokerModel.js';
import { logActivityDb } from '../../models/superadmin/saAdminModel.js'; 

export const getBrokers = async (req: Request, res: Response): Promise<void> => {
    try {
        const brokers = await getAllBrokersDb();
        res.status(200).json({ success: true, data: brokers });
    } catch (error) {
        console.error('Error fetching brokers:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const createBroker = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, spoc_name, email, contact, location, pincode, irdia_number, logo_url, password, status, permissions } = req.body;

        if (!name || !email || !password) {
            res.status(400).json({ success: false, message: 'Name, email, and password are required' });
            return;
        }

        const emailFormatted = email.toLowerCase().trim();
        const existing = await getBrokerByEmailDb(emailFormatted);

        if (existing.length > 0) {
            res.status(400).json({ success: false, message: 'A broker with this email already exists' });
            return;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newBroker = await createBrokerDb({
            name, spoc_name: spoc_name || '', email: emailFormatted, contact: contact || '', 
            location: location || '', pincode: pincode || '', irdia_number: irdia_number || '', 
            logo_url, status: status || 'Active', permissions: permissions || {}
        }, hashedPassword);

        await logActivityDb('Super Admin', `Onboarded new Insurance Broker: ${name}`, 'Super Admin');

        res.status(201).json({ success: true, message: 'Broker onboarded successfully', data: newBroker });
    } catch (error) {
        console.error('Error creating broker:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const updateBroker = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        // FIXED: Extract logo_url from req.body
        const { name, spoc_name, email, contact, location, pincode, irdia_number, password, status, permissions, logo_url } = req.body;

        if (!name || !email) {
            res.status(400).json({ success: false, message: 'Name and email are required' });
            return;
        }

        const emailFormatted = email.toLowerCase().trim();
        const existing = await getBrokerByEmailDb(emailFormatted, id);

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

        // FIXED: Pass logo_url to updateBrokerDb payload
        const updatedBroker = await updateBrokerDb(id, {
            name, spoc_name: spoc_name || '', email: emailFormatted, contact: contact || '', 
            location: location || '', pincode: pincode || '', irdia_number: irdia_number || '', 
            status, permissions, logo_url
        }, hashedPassword);

        if (!updatedBroker) {
            res.status(404).json({ success: false, message: 'Broker not found' });
            return;
        }

        const actionText = passwordUpdated 
            ? `Updated credentials & details for broker ${name}`
            : `Updated details for broker ${name}`;
        await logActivityDb('Super Admin', actionText, 'Super Admin');

        res.status(200).json({ success: true, message: 'Broker updated successfully', data: updatedBroker });
    } catch (error) {
        console.error('Error updating broker:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export const deleteBroker = async (req: Request, res: Response): Promise<void> => {
    try {
        const id = req.params.id as string;
        const deleted = await deleteBrokerDb(id);

        if (!deleted) {
            res.status(404).json({ success: false, message: 'Broker not found' });
            return;
        }

        await logActivityDb('Super Admin', `Deleted Insurance Broker: ${deleted.name}`, 'Super Admin');

        res.status(200).json({ success: true, message: 'Broker deleted successfully' });
    } catch (error) {
        console.error('Error deleting broker:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};