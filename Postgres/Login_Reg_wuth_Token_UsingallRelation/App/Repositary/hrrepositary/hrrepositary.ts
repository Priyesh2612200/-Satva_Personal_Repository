import { PrismaClient } from '@prisma/client';

import { Hrmodel } from '../../Models/interface';



const prisma = new PrismaClient();

class HRRepository {




  async create(usermodel: Hrmodel) {
    let responseUser = await prisma.hRList.create({
      data: {
        name: usermodel.name,
        email: usermodel.email,
        password: usermodel.password,
        hrtype : usermodel.hrtype,
        empid:usermodel.empid


      }
    });

    return responseUser;
  }


  async findByEmail(email: string) {
    return await prisma.hRList.findFirst({
      where: {
        email: email,
      }
    })
  }
  
  async findOne(email: any) {
    return await prisma.hRList.findUnique({
      where: {
        email: email,
      },
    });
  }

      async getUser(userid: number){
  // return await prisma.empAuthData.findMany();
  return await prisma.hRList.findMany({
    where: {
      id: userid
    },
   include:{
    EmpAuthData:{
      select:{
        name:true,
        emptype:true,
        address:true
      }
    }
   }
  });
}


async update(id: number, usermodel: Hrmodel) {
  const updatedUser = await prisma.hRList.update({
    where: { id },
    data: {
      name: usermodel.name,
      email: usermodel.email,
      password: usermodel.password,
      hrtype : usermodel.hrtype,
      empid:usermodel.empid
    },
  });
  return updatedUser;
}

async delete(id: number) {
  const deletedUser = await prisma.hRList.delete({
    where: {id},
  });
  return deletedUser;
}

}

export default new HRRepository();
