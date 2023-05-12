import { PrismaClient } from '@prisma/client';

import { Managermodel, SeniorEmpmodel } from '../../Models/interface';



const prisma = new PrismaClient();

class SeniorEmpRepository {




  async create(usermodel: SeniorEmpmodel, managerIDs: number[]) {
    console.log("manageridssss",managerIDs)
    let responseUser = await prisma.seniorEmpList.create({
      data: {
        name: usermodel.name,
        email: usermodel.email,
        password: usermodel.password,
        city: usermodel.city,
        senioremprole: usermodel.senioremprole,
        salary: usermodel.salary,

        
        managerlist: {
          connect: [{id: managerIDs[0]}]
        }
      }
    });

    return responseUser;
  }


  


  async findByEmail(email: string) {
    return await prisma.seniorEmpList.findFirst({
      where: {
        email: email,
      }
    })
  }

  // async findOne(email: any) {
  //   return await prisma.seniorEmpList.findUnique({
  //     where: {
  //       email: email
  //     }
  //   });
  // }

  async getUser(userid: number) {
    // return await prisma.empAuthData.findMany();
    return await prisma.seniorEmpList.findMany({
      where: {
        id: userid
      },
      include:
      {
        managerlist:true
      }
    });
  }

  async update(id: number, usermodel: SeniorEmpmodel) {
    const updatedUser = await prisma.seniorEmpList.update({
      where: { id },
      data: {
        name: usermodel.name,
        email: usermodel.email,
        password: usermodel.password,
        city: usermodel.city,
        senioremprole: usermodel.senioremprole,
        salary: usermodel.salary,
      },
    });
    return updatedUser;
  }
  
  async delete(id: number) {
    const deletedUser = await prisma.seniorEmpList.delete({
      where: {id},
    });
    return deletedUser;
  }
}

export default new SeniorEmpRepository();
