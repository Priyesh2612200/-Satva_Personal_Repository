
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace PracticeOne
{
    internal class methods

    {
        //write your name 5 times.
        public static void name() {

            string myname = "Priyesh";
            for (int i = 0; i <= 4; i++)
            {
                Console.WriteLine("Hello {0}", myname);
            }
            Console.Write("\n\n\n");
        }

        //Write a method that returns a string of even numbers..
        //greater than 0 and less than 50. (do not print 2,12,22,32,42)
      
        public static void returnstringofeven()
        {
            int i;
            Console.WriteLine("Even numbers between 1 to 50:");
            for (i = 2; i <= 50; i += 2)
            {
                //(i == 2 || i == 12 || i == 22 || i == 32 || i == 42)
                if (i%10==2)
                {
                    continue; // skip excluded numbers
                
            
                }
                Console.Write(i+",");
            }
            Console.Write("\n\n\n");

        }

        //program to count negative elements in array -> int[] 
        //myNum = { 10, 20, 30, 40, -9, -8, -3, 4 }; Output = 3 get numbers from user input  not use static
        public static void countnegativeelements()
        {

            int i, num;

            //Reads size and elements in array
            Console.WriteLine("Enter size of the array for program to count negative elements in array: ");
            num = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter " + num + " elements in the array: ");
            int[] arr = new int[num];

            for (i = 0; i < num; i++)
            {
                arr[i] = int.Parse(Console.ReadLine());
            }


            var neg = arr.Where(n => n < 0);
            Console.WriteLine("\n negative numbers: " + neg.Count());
            Console.ReadLine();

            Console.Write("\n\n\n");
        }

        //program to find maximum and minimum element in array
        public static void maxminarrayelement()
        {
           
            int i, num;

            //Reads size and elements in array
            Console.WriteLine("Enter size of the array for find maximum and minimum element in array: ");
            num = int.Parse(Console.ReadLine());
            Console.WriteLine("Enter " + num + " elements in the array: ");
            int[] arr = new int[num];

            for (i = 0; i < num; i++)
            {
                arr[i] = int.Parse(Console.ReadLine());
            }
            
            Console.WriteLine("Minimum number is " + arr.Min());
            Console.WriteLine("Maximum number is " + arr.Max());
            Console.ReadLine();

            Console.Write("\n\n\n");
        }

        //program to count even and odd elements in array
        public static void countoddeven()
        {
            int i, num, evennum, oddnum;

            //Reads size and elements in array
            Console.WriteLine("Enter size of the array for count even and odd elements in array: ");
            num = Convert.ToInt32(Console.ReadLine());
            Console.WriteLine("Enter " + num + " elements in the array: ");
     
            int[] arr = new int[num];

            for (i = 0; i < num; i++)
            {
                arr[i] = Convert.ToInt32(Console.ReadLine());
            }

            evennum = 0; 
            oddnum = 0; 

            for (i = 0; i < num; i++)
            {
                // increment evennumber count 
                if (arr[i] % 2 == 0)
                {
                    evennum++;
                }
                else
                {
                    oddnum++; // increment oddnumber count
                }
            }

            Console.WriteLine("Total even  numbers: " + evennum);
            Console.WriteLine("Total odd numbers: " + oddnum);


            Console.ReadLine();
            Console.Write("\n\n\n");

        }
        //method overloading print method
        public static void print(int id)
        {

            Console.WriteLine( "Id1 : " + id);
            Console.ReadLine();
        }
        public static void print(String name)
        {

            Console.WriteLine("Name1 : " + name);
            Console.ReadLine();
        }

        public static void print(int id, String name)
        {

            Console.WriteLine("Id2 : " + id + " "+ "Name2 : " + name );
            Console.ReadLine();
            Console.Write("\n\n\n");
        }

        //method overloading add method
        public static void Add(int a, int b)
        {
            int sum = a + b;
            Console.WriteLine(sum);
            Console.ReadLine();
        }
        public static void Add(int a, int b, int c)
        {
            int sum = a + b + c;
            Console.WriteLine(sum);
            Console.ReadLine();
        }
        public static void Add(double a, double b, double c)
        {
            double sum = a + b + c;
            Console.WriteLine(sum);
            Console.ReadLine();
        }

    }
}
