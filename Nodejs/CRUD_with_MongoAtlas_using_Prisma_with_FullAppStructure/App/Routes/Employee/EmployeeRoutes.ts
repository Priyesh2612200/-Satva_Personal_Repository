import { Router } from 'express';
import controller from '../../Controller';

const router = Router();


router.post('/saveemp',controller.empcontroller.saveemp);
router.get('/getemp',controller.empcontroller.getemp);

export default router;