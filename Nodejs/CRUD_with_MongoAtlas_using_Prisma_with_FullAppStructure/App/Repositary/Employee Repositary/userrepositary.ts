import { PrismaClient } from '@prisma/client'
import { EmpListModel } from "../../Models/empmodel"

const prisma = new PrismaClient()

class UserRepository {

    async create(userModel:EmpListModel){
        let resposeUser = await prisma.employeelist.create({data: {
            name: userModel.name,
            age: userModel.age,
            email: userModel.email,
            address: userModel.address,
            emptype : userModel.emptype,
            }})
        return resposeUser
    }

    async getUser(){
        return await prisma.employeelist.findMany()
    }

}

export default new UserRepository;