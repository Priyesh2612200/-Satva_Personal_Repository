import { Router } from 'express';
import controller from '../../Controller';

const router = Router();


router.post('/saveUser',controller.userController.saveUser);
router.get('/getUser',controller.userController.getUser);
// router.put('/UpdateUser',controller.userController.UpdateUser);

export default router;