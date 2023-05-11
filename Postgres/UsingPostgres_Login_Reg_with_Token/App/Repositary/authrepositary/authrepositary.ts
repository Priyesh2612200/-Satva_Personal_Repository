import { PrismaClient } from '@prisma/client';

import { Empmodel } from '../../Models/interface';



const prisma = new PrismaClient();

class EmployeeRepository {




  async create(usermodel: Empmodel) {
    let responseUser = await prisma.empAuthData.create({
      data: {
        name: usermodel.name,
        email: usermodel.email,
        password: usermodel.password,


      }
    });

    return responseUser;
  }


  async findByEmail(email: string) {
    return await prisma.empAuthData.findFirst({
      where: {
        email: email,
      }
    })
  }
  
async findOne(email: any) {
  return await prisma.empAuthData.findUnique({
    where: {
      email: email
    }
  });
}

      async getUser(userid: number){
  // return await prisma.empAuthData.findMany();
  return await prisma.empAuthData.findMany({
    where: {
      id: userid
    }
  });
}
}

export default new EmployeeRepository();
