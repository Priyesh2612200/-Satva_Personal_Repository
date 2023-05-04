import { PrismaClient, SeniorEmpList } from '@prisma/client'
import { ManagerListModel } from "../../Models/managermodel"
import { stringify } from 'querystring'

const prisma = new PrismaClient()

class UserRepository {

  async create(userModel: ManagerListModel) {
    let resposeUser = await prisma.managerList.create({
      data: {
        name: userModel.name,
        email: userModel.email,
        city: userModel.city,
        managerrole: userModel.managerrole,
        salary: userModel.salary,
        seniorempid: userModel.seniorempid
      }
    })
    return resposeUser
  }

  async getUser() {
    //     return await prisma.managerList.findMany({
    //         where: {
    //             salary: {
    //                 gt: 50000,
    //           },
    //         },
    //       });

    // return await prisma.managerList.findMany({
    //     orderBy: {
    //       name:'asc'
    //     },
    //   });

    return await prisma.managerList.findMany({
      include: {
        senioremplist: {
          select: {
            name: true,
            salary: true
          }
        }
      },
    });

    // return await prisma.managerList.findMany({
    //   where: {
    //     name: 'Shiv',
    //   },
    //   include: {

    //     senioremplist:true
    //   },
    // })


  }

  async update(id: string, usermodel: ManagerListModel) {
    const updatedUser = await prisma.managerList.update({
      where: { id },
      data: {
        name: usermodel.name,
        email: usermodel.email,
        city: usermodel.city,
        managerrole: usermodel.managerrole,
        salary: usermodel.salary,
        seniorempid: usermodel.seniorempid
      },
    });
    return updatedUser;
  }

  async delete(id: string) {
    const deletedUser = await prisma.managerList.delete({
      where: { id },
    });
    return deletedUser;
  }

  async get(key: string) {

  }


  async getsortdata(sortType: any, key: string) {
    var searchUser: any = [];
    if (key != undefined && key != "") {
      let sort={}
      if(sortType){
       sort= {
          name: sortType
        }
      }
      
      searchUser = await prisma.managerList.findMany({
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

        include: {
          senioremplist: true,
        },

      orderBy:sort

      });

      return searchUser
    }

    const sortUser = await prisma.managerList.findMany({

      orderBy: {
        name: sortType
      }
    });
    // return sortUser;




    return searchUser;


  };
}

export default new UserRepository;