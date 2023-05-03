import {Request, Response} from 'express'
import { EmpListModel } from "../../Models/empmodel"
import userrepositary from '../../Repositary'
import { responseModel } from '../../../interface'


const saveemp =  async (req: Request, res: Response) => {
    console.log('Request: ' + req.body.name)
    const empuser : EmpListModel = {
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address,
        emptype: req.body.emptype
    }
    console.log('User Req' + empuser)
    try {
        const userResponse = await userrepositary.EmpRepositary.create(empuser)
        let response : responseModel = {
            status: 201,
            message: "User save successfully",
            data: userResponse,
            error: null
        }
        console.log(response);
        res.status(201).json(response);

    } catch (e) {
        console.log(e);
        let response : responseModel = {
            status: 400,
            message: "User save failed",
            data: null,
            error: e as string
        }
        res.status(400).json(response);
        
    }
}

const getemp = async (req: Request, res: Response) => {
    
    try {
        const userResponse = await userrepositary.EmpRepositary.getUser()
        let response : responseModel = {
            status: 201,
            message: "User save successfully",
            data: userResponse,
            error: null
        }
        res.status(201).json(response);
    } catch (e) {
        let response : responseModel = {
            status: 400,
            message: "User save failed",
            data: null,
            error: e as string
        }
        res.status(400).json(response);
    }
}




export default {
    saveemp,
    getemp
}