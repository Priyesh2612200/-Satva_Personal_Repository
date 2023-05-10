import { Router } from "express";
import authcontroller from '../../Controller/auth/authcontroller'
import registerValidationRules, { validatecheck } from "../../Middleware/validator";
import { auth } from "../../Middleware/verifytoken";


const router = Router();

router.post('/authroutes/register',registerValidationRules,validatecheck,authcontroller.register)
router.post('/authroutes/login',validatecheck,authcontroller.login);

router.get('/authroutes/getdata',auth,authcontroller.verifytoken);
export default router;