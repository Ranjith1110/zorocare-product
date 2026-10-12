import { Router } from 'express';
import {
    getCorporates,
    createCorporate,
    updateCorporate,
    deleteCorporate
} from '../../controllers/superadmin/saCorporateController.js';

const router = Router();

router.get('/', getCorporates);
router.post('/', createCorporate);
router.put('/:id', updateCorporate);
router.delete('/:id', deleteCorporate);

export default router;