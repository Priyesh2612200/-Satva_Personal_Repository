import { PrismaClient } from '@prisma/client';

import { Managermodel } from '../../Models/interface';



const prisma = new PrismaClient();

class ManagerRepository {




  async create(usermodel: Managermodel, SeniorEmpIdsIDs: number[]) {
    let responseUser = await prisma.managerList.create({
      data: {
        name: usermodel.name,
        email: usermodel.email,
        password: usermodel.password,
        city:usermodel.city,
        managerrole:usermodel.managerrole,
        salary:usermodel.salary,

        senioremplist:{
          connect: [{id: SeniorEmpIdsIDs[0]}]
        }

       

      }
    });

    return responseUser;
  }


  async findByEmail(email: string) {
    return await prisma.managerList.findFirst({
      where: {
        email: email,
      }
    })
  }
  
// async findOne(email: any) {
//   return await prisma.managerList.findUnique({
//     where: {
//       email: email
//     }
//   });
// }

      async getUser(userid: number){
  // return await prisma.empAuthData.findMany();
  return await prisma.managerList.findMany({
    where: {
      id: userid
    },
    include:{
      employeelist:true,
      senioremplist:true
    }
  });
}

async update(id: number, usermodel: Managermodel) {
  const updatedUser = await prisma.managerList.update({
    where: { id },
    data: {
      name: usermodel.name,
      email: usermodel.email,
      password: usermodel.password,
      city:usermodel.city,
      managerrole:usermodel.managerrole,
      salary:usermodel.salary

    },
  });
  return updatedUser;
}

async delete(id: number) {
  const deletedUser = await prisma.managerList.delete({
    where: {id},
  });
  return deletedUser;
}


async getsortdata(key: string, sortType: any, sortFieldName: string) {
  console.log('key: ', key);
  var searchUser: any = [];
  let sort = {}
  let search = {}
  
  if (sortType) {
    sort = {
      [sortFieldName]: sortType
    }
  }

  if (key) {
    console.log('key: ', key);
    search = {
      OR: [{
        name: {
          contains: key,

        },
      },
      {
        city: {
          contains: key,
        },

      }

      ]
    }

  }
  console.log('search: ', search);



  searchUser = await prisma.managerList.findMany({
    where: search,
    orderBy: sort,

  });

  return searchUser

};

}

export default new ManagerRepository();
