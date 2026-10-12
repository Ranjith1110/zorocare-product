import pool from '../../config/db.js';

export const initSuperAdminDb = async (): Promise<void> => {
    const createSuperAdminsQuery = `
        CREATE TABLE IF NOT EXISTS super_admins (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(100) DEFAULT 'Super Admin',
            role VARCHAR(50) DEFAULT 'superadmin',
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;

    const createAdminsQuery = `
        CREATE TABLE IF NOT EXISTS admins (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            phone VARCHAR(20),
            password VARCHAR(255) NOT NULL,
            role VARCHAR(50) DEFAULT 'Admin',
            status VARCHAR(20) DEFAULT 'Active',
            permissions JSONB DEFAULT '{}'::jsonb,
            last_login TIMESTAMP,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `;

    await pool.query(createSuperAdminsQuery);
    await pool.query(createAdminsQuery);
};