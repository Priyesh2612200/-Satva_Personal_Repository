import { Router } from "express";
import senioremp from '../../Controller/senioremp/seniorempcontroller'
import registerValidationRules, { validatecheck } from "../../Middleware/validator";
import { auth } from "../../Middleware/verifytoken";


const router = Router();

router.post('/senioremproutes/register',registerValidationRules,validatecheck,senioremp.register)
router.post('/senioremproutes/login',validatecheck,senioremp.login);


router.put('/senioremproutes/update/:id',validatecheck,senioremp.updateemp);
router.delete('/senioremproutes/delete/:id',senioremp.deleteemp);


router.get('/senioremproutes/getdata',auth,senioremp.verifytoken);
export default router;