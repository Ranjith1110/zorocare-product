import pool from '../../config/db.js';

export const getAdminForAuthDb = async (email: string) => {
    const query = 'SELECT * FROM admins WHERE email = $1';
    const result = await pool.query(query, [email.toLowerCase().trim()]);
    return result.rows[0];
};

export const updateAdminLastLoginDb = async (id: number) => {
    const query = 'UPDATE admins SET last_login = CURRENT_TIMESTAMP WHERE id = $1';
    await pool.query(query, [id]);
};