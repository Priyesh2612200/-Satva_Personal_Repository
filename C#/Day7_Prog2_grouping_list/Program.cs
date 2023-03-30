using System;
using System.Collections.Generic;
using System.Linq;

namespace PageNumberGrouperDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            //var pages = new int[] { 1, 2, 4, 6, 7, 8, 9, 10, 12, 17, 19, 20, 21, 24, 25, 30 };

            Console.WriteLine("Enter the page numbers (separated by commas): ");
            string input = Console.ReadLine();

           
            int[] pages = input.Split(',').Select(int.Parse).ToArray();


            string[] groups = GroupPageNumbers(pages);

            Console.WriteLine("Original: {0}", BuildList(pages.Select(p => p.ToString())));
            Console.WriteLine("Grouped:  {0}", BuildList(groups));
        }

        static string[] GroupPageNumbers(int[] pages)
        {
            var groups = new List<string>();

            for (int i = 0; i < pages.Length; i++)
            {
                int start = pages[i];
                while (i < pages.Length - 1 && pages[i + 1] == pages[i] + 1)
                {
                    i++;
                }
                groups.Add(FormatGroup(start, pages[i]));
            }

            return groups.ToArray();
        }

        static string FormatGroup(int start, int end)
        {
            return start == end ? start.ToString() : string.Format("{0}-{1}", start, end);
        }

        static string BuildList(IEnumerable<string> items)
        {
            return string.Join(", ", items.ToArray());
        }
    }
}
