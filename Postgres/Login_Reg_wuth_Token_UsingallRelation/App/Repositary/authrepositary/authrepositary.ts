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
        address:usermodel.address,
        emptype:usermodel.emptype,
        managerid:usermodel.managerid
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
      
    },
    include:{
      managerlist:true
    }
  });
}

async update(id: number, usermodel: Empmodel) {
  const updatedUser = await prisma.empAuthData.update({
    where: { id },
    data: {
      name: usermodel.name,
      email: usermodel.email,
      password:usermodel.password,
      address: usermodel.address,
      emptype : usermodel.emptype,
      managerid:usermodel.managerid
    },
  });
  return updatedUser;
}

async delete(id: number) {
  const deletedUser = await prisma.empAuthData.delete({
    where: {id},
  });
  return deletedUser;
}


}



export default new EmployeeRepository();
