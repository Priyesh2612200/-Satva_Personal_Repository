using PracticeOne;
using System;
using System.Xml.Linq;

namespace Day2
{
    class programs
    {
        static void Main(string[] args)
        {
          

            try
            {
                methods.name();
                methods.returnstringofeven();
                methods.countnegativeelements();
                methods.maxminarrayelement();
                methods.countoddeven();

                methods.print(01);
                methods.print("Priyesh");
                methods.print(02,"Hardik");

                methods.Add(1,2);
                methods.Add(1,2,3);
                methods.Add(1.0,2.0,3.0);


            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }



        }
        
    }
}