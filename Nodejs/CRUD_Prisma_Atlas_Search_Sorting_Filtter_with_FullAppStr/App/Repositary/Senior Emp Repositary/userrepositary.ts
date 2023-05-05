import { PrismaClient } from '@prisma/client'
import { SeniorEmpListModel } from "../../Models/seniorempmodel"

const prisma = new PrismaClient()

class UserRepository {

    async create(userModel:SeniorEmpListModel){
        let resposeUser = await prisma.seniorEmpList.create({data: {
            name: userModel.name,
            email: userModel.email,
            city: userModel.city,
            senioremprole:userModel.senioremprole,
            managerid:userModel.managerid,
            salary:userModel.salary
            }})
        return resposeUser
    }
    

    async getUser(){
        return await prisma.seniorEmpList.findMany({
          include:{
            managerlist:{
              select:
              {
                employeelist:true
              }
            }
          }
        })
        // return await prisma.seniorEmpList.findMany({
        //   include : {
        //     managerlist:{
        //       select:{
        //         name:true,
        //         salary:true
        //       }
        //     }
        //   },
        // });

        
    }

    async update(id: string, usermodel: SeniorEmpListModel) {
        const updatedUser = await prisma.seniorEmpList.update({
          where: { id },
          data: {
            name: usermodel.name,
            email: usermodel.email,
            city: usermodel.city,
            senioremprole:usermodel.senioremprole,
            managerid:usermodel.managerid,
            salary:usermodel.salary
          },
        });
        return updatedUser;
      }

      async delete(id: string) {
        const deletedUser = await prisma.seniorEmpList.delete({
          where: {id},
        });
        return deletedUser;
      }

}

export default new UserRepository;