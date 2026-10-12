import pool from '../config/db.js';
import { initSuperAdminDb } from '../models/superadmin/saAuthModel.js';
import bcrypt from 'bcrypt';
import readline from 'readline';

const ask = (query: string): Promise<string> => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    return new Promise((resolve) =>
        rl.question(query, (ans) => {
            rl.close();
            resolve(ans.trim());
        })
    );
};

async function createSuperAdmin(): Promise<void> {
    try {
        await initSuperAdminDb();

        const argEmail = process.argv[2];
        const argPassword = process.argv[3];
        const argName = process.argv[4];

        const email = argEmail || (await ask('Enter Super Admin Email: '));
        const password = argPassword || (await ask('Enter Super Admin Password: '));
        const name = argName || (await ask('Enter Name (optional, default: Super Admin): ')) || 'Super Admin';

        if (!email || !password) {
            console.error('Email and password are required.');
            process.exit(1);
        }

        const existing = await pool.query('SELECT id FROM super_admins WHERE email = $1', [email]);
        if (existing.rows.length > 0) {
            console.error(`Super Admin with email "${email}" already exists.`);
            process.exit(1);
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await pool.query(
            'INSERT INTO super_admins (email, password, name, role) VALUES ($1, $2, $3, $4)',
            [email, hashedPassword, name, 'superadmin']
        );

        console.log(`\n✅ Super Admin created successfully!`);
        console.log(`Email: ${email}`);
        console.log(`Name:  ${name}\n`);
    } catch (error) {
        console.error('Error creating super admin:', error);
    } finally {
        await pool.end();
        process.exit(0);
    }
}

createSuperAdmin();