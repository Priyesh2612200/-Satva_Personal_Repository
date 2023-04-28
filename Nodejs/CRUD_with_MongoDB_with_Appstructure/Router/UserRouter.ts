import  Express  from "express";
import UserController from "../Controller/UserController";
const router = Express.Router();

router.get('/getdata',UserController.get);
router.post('/savedata',UserController.post);
router.delete('/deletedata/:id',UserController.delete);
router.put('/updatedata/:id',UserController.put);


export default router;