
import { Request, Response } from "express";
import UserDate from '../Model/UserSchema';
import { usermodel } from "../Model/UserModel";



class UserController {

    async get(req: Request, res: Response) {
        try {
            const userData = await UserDate.aggregate([
                {
                
                    $lookup: {
                        from: 'department',
                        localField: 'deptid',
                        foreignField: '_id',
                        as: 'department',
                    }
                },
                // {
                //     $match: {
                //         'department.department_location':{ $eq :'Benghazi'} 
                    
                //     }
                // },
                // {
                //     $match: {
                //         'department.department_location':{ $ne  :'Benghazi'} 
                    
                //     }
                // } ,
                // {
                //     $match: {
                //         'department.department_number':{ $gt  :3} 
                    
                //     }
                // } ,
                // {
                //     $match: {
                //         'department.department_number':{ $gte  :3} 
                    
                //     }
                // } ,
                // {
                //     $match: {
                //         'department.department_number':{ $lt  :1} 
                    
                //     }
                // } ,
                // {
                //     $match: {
                //         'department.department_number':{ $lte :1} 
                    
                //     }
                // // } ,
                {
                    $match: {
                      $or: [
                        { "empcity": { $eq: 'surat' } },
                        { "department.department_number": { $eq: 2 } }
                      ]
                    }
                  }
                  
            ]);

            const response = {
                status: 200,
                message: 'User Get Successfully',
                data: userData,
            };

            res.send(response);
        } catch (ex: any) {
            const response = {
                status: 400,
                message: ex.message,
            };

            res.send(response);
        }
    }




    async post(req: Request, res: Response) {
        console.log("hgfhksdf");
        const users = req.body.map((userData: any) => new UserDate(userData));
        try {
            let userresponses = await UserDate.insertMany(users);

            let response = new usermodel();
            response.status = 201;
            response.message = "Data Save Successfully!";
            response.data = req.body;
            response.error = null;

            res.status(201).json(response);
        }
        catch (ex: any) {
            let response = new usermodel();
            response.status = 400;
            response.message = "Data Save to Failed";
            response.data = null;
            response.error = ex;
            res.status(400).json(response);
        }



    }

    // async delete (req: Request, res: Response) {

    //     let response = new usermodel();
    //     try {

    //         const deletedUser = await UserDate.findByIdAndDelete(req.params.id);

    //         if (!deletedUser) throw Error('User not found');

    //         res.status(201).json(deletedUser);
    //         response.message = "Record Deleted Successfully!";
    //         response.data = req.body
    //     }
    //     catch (ex: any) {
    //         response.status = 400
    //         response.message = ex.message;
    //     }
    // }




    // async put(req: Request, res: Response) {
    //     let response = new usermodel();
    //     try {
    //         const updateuser = await UserDate.findByIdAndUpdate(req.params.id,
    //             { name: req.body.name, email: req.body.email,age:req.body.age, address: req.body.address },
    //             { new: true }
    //           );

    //         if (!updateuser) throw Error('User not found');

    //         res.status(201).json(updateuser);
    //         response.message = "Record Updated Successfully!";
    //         response.data = req.body;
    //     }

    //     catch (ex: any) {
    //         response.status = 400
    //         response.message = ex.message;
    //     }
    // }


}
export default new UserController();