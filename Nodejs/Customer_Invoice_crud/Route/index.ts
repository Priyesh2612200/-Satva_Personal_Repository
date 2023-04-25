import express,  { Router } from 'express';
import CustomerRoute from './CustomerRoute';
import InvoiceRoute from './InvoiceRoute';

const router: Router = express.Router();

router.use('/customer', CustomerRoute);
router.use('/invoice', InvoiceRoute);

export default router;
