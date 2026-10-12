import pool from '../../config/db.js';

export const getBrokerForAuthDb = async (email: string) => {
    const query = 'SELECT * FROM insurance_brokers WHERE email = $1';
    const result = await pool.query(query, [email.toLowerCase().trim()]);
    return result.rows[0];
};