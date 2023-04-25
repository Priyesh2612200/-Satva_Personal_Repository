import express, { Router } from 'express';
import InvoiceController from '../Controller/InvoiceController';


const router: Router = express.Router();

router.get('/getinvoice', InvoiceController.getInvoice);
router.post('/Storeinvoice', InvoiceController.Save);
router.put('/Updateinvoice', InvoiceController.updateinvoice);
router.delete('/Deleteinvoice', InvoiceController.deleteinvoice);
export default router;