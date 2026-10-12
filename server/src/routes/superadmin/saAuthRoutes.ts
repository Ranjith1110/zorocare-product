import { Router } from 'express';
import { superAdminLogin } from '../../controllers/superadmin/saAuthController.js';

const router = Router();

router.post('/super-admin/login', superAdminLogin);

export default router;