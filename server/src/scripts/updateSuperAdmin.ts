import pool from '../config/db.js';
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

async function updateSuperAdmin(): Promise<void> {
    try {
        const argEmail = process.argv[2];
        const argPassword = process.argv[3];

        const email = argEmail || (await ask('Enter the Email of the Super Admin you want to update: '));
        if (!email) {
            console.error('Email is required.');
            process.exit(1);
        }

        const existing = await pool.query('SELECT id FROM super_admins WHERE email = $1', [email]);
        if (existing.rows.length === 0) {
            console.error(`Super Admin with email "${email}" not found in the database.`);
            process.exit(1);
        }

        const newPassword = argPassword || (await ask('Enter the NEW Password: '));
        if (!newPassword) {
            console.error('New password is required.');
            process.exit(1);
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await pool.query(
            'UPDATE super_admins SET password = $1 WHERE email = $2',
            [hashedPassword, email]
        );

        console.log(`\n✅ Password successfully updated for Super Admin: ${email}\n`);
    } catch (error) {
        console.error('Error updating super admin:', error);
    } finally {
        await pool.end();
        process.exit(0);
    }
}

updateSuperAdmin();