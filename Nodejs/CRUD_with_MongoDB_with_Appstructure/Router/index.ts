import express from 'express';
import userrouter from './UserRouter'
const router = express.Router();
;

router.use('/user',userrouter);

export default router;