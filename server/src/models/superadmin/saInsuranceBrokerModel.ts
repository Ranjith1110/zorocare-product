import pool from '../../config/db.js';

export interface BrokerPayload {
    name: string;
    spoc_name: string;
    email: string;
    contact: string;
    location: string;
    pincode: string;
    irdia_number: string;
    logo_url?: string;
    password?: string;
    status: string;
    permissions: any;
}

export const initInsuranceBrokersDb = async (): Promise<void> => {
    const query = `
        CREATE TABLE IF NOT EXISTS insurance_brokers (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            spoc_name VARCHAR(255),
            email VARCHAR(255) UNIQUE NOT NULL,
            contact VARCHAR(50),
            location VARCHAR(255),
            pincode VARCHAR(20),
            irdia_number VARCHAR(100),
            logo_url TEXT,
            password VARCHAR(255) NOT NULL,
            status VARCHAR(50) DEFAULT 'Active',
            policies_sold INTEGER DEFAULT 0,
            corporates_count INTEGER DEFAULT 0,
            total_users INTEGER DEFAULT 0,
            total_premium VARCHAR(50) DEFAULT '₹0',
            permissions JSONB DEFAULT '{}'::jsonb,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;
    await pool.query(query);
};

export const getAllBrokersDb = async () => {
    const query = `
        SELECT id, name, spoc_name, email, contact, location, pincode, irdia_number, logo_url, 
               status, policies_sold, corporates_count, total_users, total_premium, permissions, created_at 
        FROM insurance_brokers 
        ORDER BY id DESC
    `;
    const result = await pool.query(query);
    return result.rows;
};

export const getBrokerByEmailDb = async (email: string, excludeId?: string | number) => {
    let query = 'SELECT id FROM insurance_brokers WHERE email = $1';
    const params: any[] = [email];

    if (excludeId) {
        query += ' AND id != $2';
        params.push(excludeId);
    }

    const result = await pool.query(query, params);
    return result.rows;
};

export const createBrokerDb = async (data: BrokerPayload, hashedPassword: string) => {
    const query = `
        INSERT INTO insurance_brokers 
        (name, spoc_name, email, contact, location, pincode, irdia_number, logo_url, password, status, permissions) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
        RETURNING id, name, email, contact, location, status, created_at
    `;
    const values = [
        data.name, data.spoc_name, data.email, data.contact, data.location, 
        data.pincode, data.irdia_number, data.logo_url || '', hashedPassword, 
        data.status, JSON.stringify(data.permissions || {})
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
};

export const updateBrokerDb = async (id: string, data: BrokerPayload, hashedPassword?: string) => {
    let query: string;
    let values: any[];

    // FIXED: Mapped logo_url correctly in both UPDATE statements
    if (hashedPassword) {
        query = `
            UPDATE insurance_brokers 
            SET name=$1, spoc_name=$2, email=$3, contact=$4, location=$5, pincode=$6, 
                irdia_number=$7, status=$8, permissions=$9, password=$10, logo_url=$11 
            WHERE id=$12 RETURNING id, name, email
        `;
        values = [
            data.name, data.spoc_name, data.email, data.contact, data.location, 
            data.pincode, data.irdia_number, data.status, JSON.stringify(data.permissions || {}), 
            hashedPassword, data.logo_url || '', id
        ];
    } else {
        query = `
            UPDATE insurance_brokers 
            SET name=$1, spoc_name=$2, email=$3, contact=$4, location=$5, pincode=$6, 
                irdia_number=$7, status=$8, permissions=$9, logo_url=$10 
            WHERE id=$11 RETURNING id, name, email
        `;
        values = [
            data.name, data.spoc_name, data.email, data.contact, data.location, 
            data.pincode, data.irdia_number, data.status, JSON.stringify(data.permissions || {}), 
            data.logo_url || '', id
        ];
    }

    const result = await pool.query(query, values);
    return result.rows[0];
};

export const deleteBrokerDb = async (id: string) => {
    const query = 'DELETE FROM insurance_brokers WHERE id = $1 RETURNING id, name, email';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};