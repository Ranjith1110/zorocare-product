import { Router } from 'express';
import { userLogin } from '../../controllers/user/userAuthController.js';

const router = Router();

// POST /api/user/auth/login
router.post('/login', userLogin);

export default router;