import { Router } from "express";
import authcontroller from '../../Controller/auth/authcontroller'
import registerValidationRules, { validatecheck } from "../../Middleware/validator";
import { auth } from "../../Middleware/verifytoken";


const router = Router();

router.post('/authroutes/register',registerValidationRules,validatecheck,authcontroller.register)
router.post('/authroutes/login',validatecheck,authcontroller.login);

router.put('/authroutes/update/:id',validatecheck,authcontroller.updateemp);
router.delete('/authroutes/delete/:id',authcontroller.deleteemp);

router.get('/authroutes/getdata',auth,authcontroller.verifytoken);
export default router;