using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace Day7_Prog3_admissionstd
{
    internal class Class
    {
   
        static void Main(string[] args)
        {

            int i = 0;
            List<string> students = new List<string>();
            do
            {
             //List<string> students = new List<string>();
               
               Console.WriteLine("Enter TaskName Would You Like:");
                int checktask = Convert.ToInt32(Console.ReadLine());

                switch (checktask)
                {
                    case 1:
                        Program.AdmitStudents(students);
                        students.ForEach(p => Console.WriteLine(p));
                       
                        break;

                    case 2:
                        Program.RemoveStudents(students);
                        break;

                    case 3:
                        Program.AwardsStudents();
                        break;

                }
                Console.WriteLine("Continue Or Exit");
                var input = Console.ReadLine();
                if (input == "yes")
                {
                    i++;
                }
                else if (input == "no")
                {
                    break;
                }

            }

            while (i < 5);

        }
    }
}
