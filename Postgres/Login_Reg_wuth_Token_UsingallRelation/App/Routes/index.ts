import express from 'express';
import auth from '../Routes/authroutes/auth'
import manager from '../Routes/managerroutes/auth'
import senioremp from '../Routes/senioremproutes/auth'
import employee from './hrroutes/auth'



const router = express.Router();
router.use(auth);
router.use(manager);
router.use(senioremp);
router.use(employee);

export default router;