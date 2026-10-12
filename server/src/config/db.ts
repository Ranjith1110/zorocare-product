import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();
const { Pool } = pkg;

const isProduction = !!process.env.DATABASE_URL;

const poolConfig = isProduction
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: { rejectUnauthorized: false }
    }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT) || 5432,
    };

const pool = new Pool(poolConfig);

pool.on('connect', () => {
    if (isProduction) {
        console.log('Connected to Live PostgreSQL database (Railway)');
    } else {
        console.log('Connected to Local PostgreSQL database');
    }
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

export default pool;