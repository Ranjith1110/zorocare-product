import { Router } from 'express';
import {
    getAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    getSecurityActivities
} from '../../controllers/superadmin/saAdminController.js';

const router = Router();

// Place /activities before /:id to prevent express route matching conflict
router.get('/activities', getSecurityActivities);
router.get('/', getAdmins);
router.post('/', createAdmin);
router.put('/:id', updateAdmin);
router.delete('/:id', deleteAdmin);

export default router;