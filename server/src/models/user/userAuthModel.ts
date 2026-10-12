import pool from '../../config/db.js';

export const getUserForAuthDb = async (email: string) => {
    const query = 'SELECT * FROM platform_users WHERE email = $1';
    const result = await pool.query(query, [email.toLowerCase().trim()]);
    return result.rows[0];
};