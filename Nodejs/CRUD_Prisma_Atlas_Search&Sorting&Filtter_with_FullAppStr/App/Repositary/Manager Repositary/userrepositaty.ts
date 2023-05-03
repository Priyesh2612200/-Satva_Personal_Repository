import { PrismaClient } from '@prisma/client'
import { ManagerListModel } from "../../Models/managermodel"

const prisma = new PrismaClient()

class UserRepository {

    async create(userModel:ManagerListModel){
        let resposeUser = await prisma.managerList.create({data: {
            name: userModel.name,
            email: userModel.email,
            city: userModel.city,
            managerrole:userModel.managerrole,
            salary:userModel.salary
            }})
        return resposeUser
    }
    
    async getUser(){
        // return await prisma.managerList.findMany({
        //     where: {
        //         salary: {
        //             gt: 50000,
        //       },
        //     },
        //   });
        return await prisma.managerList.findMany({
            orderBy: {
              name:'asc'
            },
          });
    }

    async update(id: string, usermodel: ManagerListModel) {
        const updatedUser = await prisma.managerList.update({
          where: { id },
          data: {
            name: usermodel.name,
            email: usermodel.email,
            city: usermodel.city,
            managerrole:usermodel.managerrole,
            salary:usermodel.salary
          },
        });
        return updatedUser;
      }

      async delete(id: string) {
        const deletedUser = await prisma.managerList.delete({
          where: {id},
        });
        return deletedUser;
      }
      
    async get(key: string) {
        const searchUser = await prisma.managerList.findMany({
          where: {
        OR: [
            {
                name: {
                contains: key,
              },
            },
            {
                city: {
                contains: key,
              },
            },
          ],
          },
        });
        return searchUser;
      }
      
      
      

}

export default new UserRepository;