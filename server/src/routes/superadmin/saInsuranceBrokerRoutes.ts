import { Router } from 'express';
import {
    getBrokers,
    createBroker,
    updateBroker,
    deleteBroker
} from '../../controllers/superadmin/saInsuranceBrokerController.js';

const router = Router();

router.get('/', getBrokers);
router.post('/', createBroker);
router.put('/:id', updateBroker);
router.delete('/:id', deleteBroker);

export default router;