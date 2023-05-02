import {Request, Response} from 'express'
import { UserListModel } from "../../Models/usermodel"
import userRespositary from '../../Repositary'
import { responseModel } from '../../../interface'


const saveUser =  async (req: Request, res: Response) => {
    console.log('Request: ' + req.body.name)
    const user : UserListModel = {
        name: req.body.name,
        hrtype : req.body.hrtype,
        email: req.body.email
    }
    console.log('User Req' + user)
    try {
        const userResponse = await userRespositary.HrRepositary.create(user)
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

const getUser = async (req: Request, res: Response) => {
    
    try {
        const userResponse = await userRespositary.HrRepositary.getUser()
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
    saveUser,
    getUser
}