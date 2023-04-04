using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day2_OOPS_Baic_Structure_Demo_Shaadi.com
{
    class admin  // Base class (parent) 
    {
        public virtual void viewprofile()
        {
            Console.WriteLine("Admin View Profile");
        }

        public virtual void searchprofile()
        {
            Console.WriteLine("Admin Search Profile");
        }
    }

    class User : admin  // Derived class (child) 
    {
        public override void viewprofile()
        {
            Console.WriteLine(" User View Profile");
        }
        public override void searchprofile()
        {
            Console.WriteLine(" User Search Profile");
        }
    }

    class Customer : admin  // Derived class (child) 
    {
        public override void viewprofile()
        {
            Console.WriteLine(" Customer View Profile");
        }
        public override void searchprofile()
        {
            Console.WriteLine(" Customer Search Profile");
        }
    }
    class Program
    {
        static void Main(string[] args)
        {

            admin myadmin = new admin();  // Create a admin object
            admin myuser = new User();  // Create a User object
            admin mycustomer = new Customer();  // Create a Customer object

            myadmin.viewprofile();
            myadmin.searchprofile();

            myuser.viewprofile();
            myuser.searchprofile();

            mycustomer.viewprofile();
            mycustomer.searchprofile();
        }   
    }
}
