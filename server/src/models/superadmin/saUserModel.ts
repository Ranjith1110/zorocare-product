import pool from '../../config/db.js';

export interface UserPayload {
    name: string;
    employee_id?: string;
    phone: string;
    email: string;
    dependent_type: string;
    location: string;
    pincode: string;
    password?: string;
    status: string;
    permissions: any;
}

export const initUsersDb = async (): Promise<void> => {
    // 1. Create the table if it completely doesn't exist
    const createQuery = `
        CREATE TABLE IF NOT EXISTS platform_users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            employee_id VARCHAR(100),
            phone VARCHAR(50) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            dependent_type VARCHAR(100) DEFAULT 'Self',
            location VARCHAR(255) DEFAULT '',
            pincode VARCHAR(20) DEFAULT '',
            password VARCHAR(255) NOT NULL,
            status VARCHAR(50) DEFAULT 'Active',
            type VARCHAR(50) DEFAULT 'Direct',
            organization VARCHAR(255) DEFAULT 'Individual',
            dependents INTEGER DEFAULT 0,
            permissions JSONB DEFAULT '{}'::jsonb,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;
    await pool.query(createQuery);

    // 2. Safely patch existing tables with missing columns
    const alterQuery = `
        ALTER TABLE platform_users 
        ADD COLUMN IF NOT EXISTS dependent_type VARCHAR(100) DEFAULT 'Self',
        ADD COLUMN IF NOT EXISTS employee_id VARCHAR(100),
        ADD COLUMN IF NOT EXISTS location VARCHAR(255) DEFAULT '',
        ADD COLUMN IF NOT EXISTS pincode VARCHAR(20) DEFAULT '',
        ADD COLUMN IF NOT EXISTS type VARCHAR(50) DEFAULT 'Direct',
        ADD COLUMN IF NOT EXISTS organization VARCHAR(255) DEFAULT 'Individual',
        ADD COLUMN IF NOT EXISTS dependents INTEGER DEFAULT 0;
    `;
    await pool.query(alterQuery);
};

export const getAllUsersDb = async () => {
    const query = `
        SELECT id, name, employee_id, phone, email, dependent_type, location, pincode, 
               status, type, organization, dependents, permissions, created_at 
        FROM platform_users 
        ORDER BY id DESC
    `;
    const result = await pool.query(query);
    return result.rows;
};

export const getUserByEmailDb = async (email: string, excludeId?: string | number) => {
    let query = 'SELECT id FROM platform_users WHERE email = $1';
    const params: any[] = [email];

    if (excludeId) {
        query += ' AND id != $2';
        params.push(excludeId);
    }

    const result = await pool.query(query, params);
    return result.rows;
};

export const createUserDb = async (data: UserPayload, hashedPassword: string) => {
    const query = `
        INSERT INTO platform_users 
        (name, employee_id, phone, email, dependent_type, location, pincode, password, status, permissions) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) 
        RETURNING id, name, email, phone, status, created_at
    `;
    const values = [
        data.name, 
        data.employee_id || '', 
        data.phone, 
        data.email, 
        data.dependent_type || 'Self', 
        data.location || '', 
        data.pincode || '', 
        hashedPassword, 
        data.status || 'Active', 
        JSON.stringify(data.permissions || {})
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
};

export const updateUserDb = async (id: string, data: UserPayload, hashedPassword?: string) => {
    let query: string;
    let values: any[];

    if (hashedPassword) {
        query = `
            UPDATE platform_users 
            SET name=$1, employee_id=$2, phone=$3, email=$4, dependent_type=$5, location=$6, pincode=$7, 
                status=$8, permissions=$9, password=$10 
            WHERE id=$11 RETURNING id, name, email
        `;
        values = [
            data.name, data.employee_id || '', data.phone, data.email, data.dependent_type || 'Self', 
            data.location || '', data.pincode || '', data.status || 'Active', 
            JSON.stringify(data.permissions || {}), hashedPassword, id
        ];
    } else {
        query = `
            UPDATE platform_users 
            SET name=$1, employee_id=$2, phone=$3, email=$4, dependent_type=$5, location=$6, pincode=$7, 
                status=$8, permissions=$9 
            WHERE id=$10 RETURNING id, name, email
        `;
        values = [
            data.name, data.employee_id || '', data.phone, data.email, data.dependent_type || 'Self', 
            data.location || '', data.pincode || '', data.status || 'Active', 
            JSON.stringify(data.permissions || {}), id
        ];
    }

    const result = await pool.query(query, values);
    return result.rows[0];
};

export const deleteUserDb = async (id: string) => {
    const query = 'DELETE FROM platform_users WHERE id = $1 RETURNING id, name, email';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};