import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// SuperAdmin & Admin Routes
import saAuthRoutes from './routes/superadmin/saAuthRoutes.js';
import saAdminRoutes from './routes/superadmin/saAdminRoutes.js';
import saInsuranceBrokerRoutes from './routes/superadmin/saInsuranceBrokerRoutes.js'; 
import saCorporateRoutes from './routes/superadmin/saCorporateRoutes.js'; 
import saUserRoutes from './routes/superadmin/saUserRoutes.js'; 
import adminAuthRoutes from './routes/admin/adminAuthRoutes.js'; 

// Entity Auth Routes
import insuranceAuthRoutes from './routes/insurance/insuranceAuthRoutes.js';
import corporateAuthRoutes from './routes/corporate/corporateAuthRoutes.js'; // <-- NEW
import userAuthRoutes from './routes/user/userAuthRoutes.js'; // <-- NEW

// DB Initialization
import { initSuperAdminDb } from './models/superadmin/saAuthModel.js';
import { initInsuranceBrokersDb } from './models/superadmin/saInsuranceBrokerModel.js'; 
import { initCorporateDb } from './models/superadmin/saCorporateModel.js'; 
import { initUsersDb } from './models/superadmin/saUserModel.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
    origin: [FRONTEND_URL, 'http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// System Routes
app.use('/api/auth', saAuthRoutes);
app.use('/api/superadmin/admins', saAdminRoutes);
app.use('/api/superadmin/insurance-brokers', saInsuranceBrokerRoutes); 
app.use('/api/superadmin/corporates', saCorporateRoutes); 
app.use('/api/superadmin/users', saUserRoutes); 

app.use('/api/admin/auth', adminAuthRoutes);

// Portal Auth Routes
app.use('/api/insurance/auth', insuranceAuthRoutes);
app.use('/api/corporate/auth', corporateAuthRoutes); // <-- NEW
app.use('/api/user/auth', userAuthRoutes); // <-- NEW

app.get('/health', (_req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

const startServer = async () => {
    try {
        await initSuperAdminDb();
        await initInsuranceBrokersDb();
        await initCorporateDb(); 
        await initUsersDb(); 
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error('Failed to initialize database tables:', err);
        process.exit(1);
    }
};

startServer();