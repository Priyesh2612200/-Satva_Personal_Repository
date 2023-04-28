
import { Request, Response } from "express";
import {usermodel} from '../Model/UserModel'
import UserDate  from '../Model/UserSchema'



class UserController {
    
async get(req: Request, res: Response)  {
    console.log("hello");
    let response = new usermodel();
    try {
       
        let userdata =await  UserDate.find();
        console.log(userdata)
     
        response.message = "User Get Successfully";
        response.data = userdata
        response.status = 200

        res.send(response)
           
    }
    catch (ex: any) {
        response.status = 400
        response.message = ex.message;
        res.send(response)
    }
 
}

post(req: Request, res: Response)  {
    let response = new usermodel();
    const userdatas = req.body;
    try {
        let userresponses = UserDate.insertMany(userdatas);
        res.status(201).json(userresponses);
        response.message = "User Save Successfully";
        response.data = req.body;
    }
    catch (ex: any) {
        response.status = 400
        response.message = ex.message;
    }

  
    
}

async delete (req: Request, res: Response) {
    
    let response = new usermodel();
    try {
       
        const deletedUser = await UserDate.findByIdAndDelete(req.params.id);
        
        if (!deletedUser) throw Error('User not found');

        res.status(201).json(deletedUser);
        response.message = "Record Deleted Successfully!";
        response.data = req.body
    }
    catch (ex: any) {
        response.status = 400
        response.message = ex.message;
    }
}


  

async put(req: Request, res: Response) {
    let response = new usermodel();
    try {
        const updateuser = await UserDate.findByIdAndUpdate(req.params.id,
            { name: req.body.name, email: req.body.email,age:req.body.age, address: req.body.address },
            { new: true }
          );

        if (!updateuser) throw Error('User not found');

        res.status(201).json(updateuser);
        response.message = "Record Updated Successfully!";
        response.data = req.body;
    }

    catch (ex: any) {
        response.status = 400
        response.message = ex.message;
    }
}
    

}
export default new UserController();