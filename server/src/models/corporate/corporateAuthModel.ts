import pool from '../../config/db.js';

export const getCorporateForAuthDb = async (email: string) => {
    const query = 'SELECT * FROM corporates WHERE email = $1';
    const result = await pool.query(query, [email.toLowerCase().trim()]);
    return result.rows[0];
};