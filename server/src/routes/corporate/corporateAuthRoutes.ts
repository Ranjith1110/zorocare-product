import { Router } from 'express';
import { corporateLogin } from '../../controllers/corporate/corporateAuthController.js';

const router = Router();

// POST /api/corporate/auth/login
router.post('/login', corporateLogin);

export default router;