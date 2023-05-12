import { Router } from "express";
import hrcontroller from '../../Controller/hr/hrcontroller'
import registerValidationRules, { validatecheck } from "../../Middleware/validator";
import { auth } from "../../Middleware/verifytoken";


const router = Router();

router.post('/hrroutes/register',registerValidationRules,validatecheck,hrcontroller.register)
router.post('/hrroutes/login',validatecheck,hrcontroller.login);

router.put('/hrroutes/update/:id',validatecheck,hrcontroller.updateemp);
router.delete('/hrroutes/delete/:id',hrcontroller.deleteemp);

router.get('/hrroutes/getdata',auth,hrcontroller.verifytoken);
export default router;