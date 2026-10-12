import pool from '../../config/db.js';

export interface AdminPayload {
    name: string;
    email: string;
    phone: string;
    password?: string;
    role: string;
    status: string;
    permissions: any;
}

// Ensure the security activities table exists
export const initActivityTable = async () => {
    const query = `
        CREATE TABLE IF NOT EXISTS admin_activities (
            id SERIAL PRIMARY KEY,
            admin_name VARCHAR(100) NOT NULL,
            action VARCHAR(255) NOT NULL,
            role VARCHAR(50) DEFAULT 'Super Admin',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;
    await pool.query(query);
};

export const logActivityDb = async (adminName: string, action: string, role = 'Super Admin') => {
    try {
        await initActivityTable();
        const query = 'INSERT INTO admin_activities (admin_name, action, role) VALUES ($1, $2, $3)';
        await pool.query(query, [adminName, action, role]);
    } catch (err) {
        console.error('Failed to log security activity:', err);
    }
};

export const getRecentActivitiesDb = async () => {
    await initActivityTable();
    const query = `
        SELECT id, admin_name, action, role, created_at 
        FROM admin_activities 
        ORDER BY created_at DESC 
        LIMIT 10
    `;
    const result = await pool.query(query);
    return result.rows;
};

export const getAllAdminsDb = async () => {
    const query = `
        SELECT id, name, email, phone, role, status, permissions, last_login, created_at 
        FROM admins 
        ORDER BY id DESC
    `;
    const result = await pool.query(query);
    return result.rows;
};

export const getAdminByEmailDb = async (email: string, excludeId?: string | number) => {
    let query = 'SELECT id FROM admins WHERE email = $1';
    const params: any[] = [email];

    if (excludeId) {
        query += ' AND id != $2';
        params.push(excludeId);
    }

    const result = await pool.query(query, params);
    return result.rows;
};

export const createAdminDb = async (data: AdminPayload, hashedPassword: string) => {
    const query = `
        INSERT INTO admins (name, email, phone, password, role, status, permissions) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING id, name, email, phone, role, status, permissions, created_at
    `;
    const values = [
        data.name,
        data.email,
        data.phone,
        hashedPassword,
        data.role,
        data.status,
        JSON.stringify(data.permissions || {})
    ];
    const result = await pool.query(query, values);
    return result.rows[0];
};

export const updateAdminDb = async (id: string, data: AdminPayload, hashedPassword?: string) => {
    let query: string;
    let values: any[];

    if (hashedPassword) {
        query = `
            UPDATE admins 
            SET name = $1, email = $2, phone = $3, role = $4, status = $5, permissions = $6, password = $7 
            WHERE id = $8 
            RETURNING id, name, email, phone, role, status, permissions
        `;
        values = [
            data.name,
            data.email,
            data.phone,
            data.role,
            data.status,
            JSON.stringify(data.permissions || {}),
            hashedPassword,
            id
        ];
    } else {
        query = `
            UPDATE admins 
            SET name = $1, email = $2, phone = $3, role = $4, status = $5, permissions = $6 
            WHERE id = $7 
            RETURNING id, name, email, phone, role, status, permissions
        `;
        values = [
            data.name,
            data.email,
            data.phone,
            data.role,
            data.status,
            JSON.stringify(data.permissions || {}),
            id
        ];
    }

    const result = await pool.query(query, values);
    return result.rows[0];
};

export const deleteAdminDb = async (id: string) => {
    const query = 'DELETE FROM admins WHERE id = $1 RETURNING id, name, email';
    const result = await pool.query(query, [id]);
    return result.rows[0];
};