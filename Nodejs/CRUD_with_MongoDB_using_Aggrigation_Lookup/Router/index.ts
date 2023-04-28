import express from 'express';
import Orgrouter from './OrganizationRouter';
const router = express.Router();

router.use('/org',Orgrouter);

export default router;