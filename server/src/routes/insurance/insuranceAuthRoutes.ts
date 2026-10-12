import { Router } from 'express';
import { insuranceLogin } from '../../controllers/insurance/insuranceAuthController.js';

const router = Router();

// POST /api/insurance/auth/login
router.post('/login', insuranceLogin);

export default router;