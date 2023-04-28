import  Express  from "express";
import OrgController from "../Controller/OrgController";
const router = Express.Router();

router.get('/getdata',OrgController.get);
router.post('/savedata',OrgController.post);
// router.delete('/deletedata/:id',OrgController.delete);
// router.put('/updatedata/:id',OrgController.put);


export default router;