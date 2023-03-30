using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//Write a C# Sharp program to create a new list from a given list of integers 
//where each integer value is added to 2 and the result value is multiplied by 5.

namespace Day7_Prog1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter a list of integers separated by commas:");
            string input = Console.ReadLine();
            List<int> myList = input.Split(',').Select(int.Parse).ToList();

            List<int> result = test(myList);

            foreach (var i in result)
            {
                Console.Write(i.ToString() + "\n ");
            }
        }

        public static List<int> test(List<int> nums)
        {
            IEnumerable<int> e = nums.Select(x => 5 * (x + 2));
            return e.ToList();
        }
    }
}


