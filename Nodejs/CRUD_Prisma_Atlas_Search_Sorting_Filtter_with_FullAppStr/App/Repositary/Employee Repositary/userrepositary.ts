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

    async update(id: string, usermodel: EmpListModel) {
        const updatedUser = await prisma.employeelist.update({
          where: { id },
          data: {
            name: usermodel.name,
            age: usermodel.age,
            email: usermodel.email,
            address: usermodel.address,
            emptype : usermodel.emptype,
          },
        });
        return updatedUser;
      }

      async delete(id: string) {
        const deletedUser = await prisma.employeelist.delete({
          where: {id},
        });
        return deletedUser;
      }


}

export default new UserRepository;