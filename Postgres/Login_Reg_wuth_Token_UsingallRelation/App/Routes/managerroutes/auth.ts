import { Router } from "express";
import managercontroller from '../../Controller/manager/managercontroller'
import registerValidationRules, { validatecheck } from "../../Middleware/validator";
import { auth } from "../../Middleware/verifytoken";


const router = Router();

router.post('/managerroutes/register',registerValidationRules,validatecheck,managercontroller.register)
router.post('/managerroutes/login',validatecheck,managercontroller.login);

router.put('/managerroutes/update/:id',validatecheck,managercontroller.updateemp);
router.delete('/managerroutes/delete/:id',managercontroller.deleteemp);

router.get('/managerroutes/getdata',auth,managercontroller.verifytoken);

router.get('/managerroutes/searchsort',managercontroller.sortingManager);
export default router;