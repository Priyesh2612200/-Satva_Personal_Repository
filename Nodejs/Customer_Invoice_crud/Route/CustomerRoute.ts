import express, { Router } from 'express';
import customerController from '../Controller/customerController';


const router: Router = express.Router();

router.get('/getcustomer', customerController.getcustomer);
router.post('/Storecustomer', customerController.Save);
router.put('/Updatecustomer', customerController.updatecustomer);
router.delete('/Deletecustomer', customerController.deletecustomer);

export default router;
