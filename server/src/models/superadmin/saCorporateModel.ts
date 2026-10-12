import pool from '../../config/db.js';

export interface CorporatePayload {
    name: string;
    spoc_name: string;
    email: string;
    contact: string;
    location: string;
    employee_count: string;
    logo_url?: string;
    password?: string;
    status: string;
    permissions: any;
}

export const initCorporateDb = async (): Promise<void> => {
    const query = `
        CREATE TABLE IF NOT EXISTS corporates (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            spoc_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            contact VARCHAR(50) NOT NULL,
            location VARCHAR(255) NOT NULL,
            employee_count VARCHAR(50) NOT NULL,
            logo_url TEXT,
            password VARCHAR(255) NOT NULL,
            status VARCHAR(50) DEFAULT 'Active',
            broker_assigned VARCHAR(255) DEFAULT 'Not Assigned',
            premium VARCHAR(50) DEFAULT '₹0',
            permissions JSONB DEFAULT '{}'::jsonb,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;
    await pool.query(query);
};

export const getAllCorporatesDb = async () => {
    const query = `
        SELECT id, name, spoc_name, email, contact, location, employee_count, logo_url, 
               status, broker_assigned, premium, permissions, created_at 
        FROM corporates 
        ORDER BY id DESC
    `;
    const result = await pool.query(query);
    return result.rows;
};

export const getCorporateByEmailDb = async (email: string, excludeId?: string | number) => {
    let query = 'SELECT id FROM corporates WHERE email = $1';
    const params: any[] = [email];

    if (excludeId) {
        query += ' AND id != $2';
        params.push(excludeId);
    }

    const result = await pool.query(query, params);
    return result.rows;
};

export const createCorporateDb = async (data: CorporatePayload, hashedPassword: string) => {
    const query = `
        INSERT INTO corporates 
        (name, spoc_name, email, contact, location, employee_count, logo_url, password, status, permissions) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
        RETURNING id, name, email, contact, location, status, created_at
    `;
    const values = [
        data.name, data.spoc_name, data.email, data.contact, data.location, 
        data.employee_count, data.logo_url || '', hashedPassword, 
        data.status, JSON.stringify(data.permissions || {})
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
};

export const updateCorporateDb = async (id: string, data: CorporatePayload, hashedPassword?: string) => {
    let query: string;
    let values: any[];

    // FIXED: Now mapping logo_url correctly in both UPDATE statements
    if (hashedPassword) {
        query = `
            UPDATE corporates 
            SET name=$1, spoc_name=$2, email=$3, contact=$4, location=$5, employee_count=$6, 
                status=$7, permissions=$8, password=$9, logo_url=$10 
            WHERE id=$11 RETURNING id, name, email
        `;
        values = [
            data.name, data.spoc_name, data.email, data.contact, data.location, 
            data.employee_count, data.status, JSON.stringify(data.permissions || {}), 
            hashedPassword, data.logo_url || '', id
        ];
    } else {
        query = `
            UPDATE corporates 
            SET name=$1, spoc_name=$2, email=$3, contact=$4, location=$5, employee_count=$6, 
                status=$7, permissions=$8, logo_url=$9 
            WHERE id=$10 RETURNING id, name, email
        `;
        values = [
            data.name, data.spoc_name, data.email, data.contact, data.location, 
            data.employee_count, data.status, JSON.stringify(data.permissions || {}), 
            data.logo_url || '', id
        ];
    }

    const result = await pool.query(query, values);
    return result.rows[0];
};

export const deleteCorporateDb = async (id: string) => {
    const query = 'DELETE FROM corporates WHERE id = $1 RETURNING id, name, email';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};