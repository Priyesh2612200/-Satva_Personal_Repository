import { PrismaClient } from '@prisma/client'
import { UserListModel } from "../../Models/usermodel"

const prisma = new PrismaClient()

class UserRepository {

    async create(userModel:UserListModel){
        let resposeUser = await prisma.hRList.create({data: {
            name: userModel.name,
            hrtype: userModel.hrtype,
            email: userModel.email,
            }})
        return resposeUser
    }

    async getUser(){
        return await prisma.hRList.findMany()
    }

}

export default new UserRepository;