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

    async update(id: string, usermodel: UserListModel) {
        const updatedUser = await prisma.hRList.update({
          where: { id },
          data: {
            name: usermodel.name,
            hrtype: usermodel.hrtype,
            email: usermodel.email,
          },
        });
        return updatedUser;
      }

      async delete(id: string) {
        const deletedUser = await prisma.hRList.delete({
          where: {id},
        });
        return deletedUser;
      }

}

export default new UserRepository;