using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day1_OOPS_ROI_cal
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to ROI Calculator!");

            double AmountReturned, AmountInvested,roi;

            Console.Write("Enter Amount Invested : ");
            AmountInvested = Convert.ToDouble(Console.ReadLine());


            Console.Write("Enter Amount Returned : ");
            AmountReturned = Convert.ToDouble(Console.ReadLine());

            roi = (AmountReturned - AmountInvested) / AmountInvested * 100;
          
            Console.WriteLine("ROI : {0}", roi+"%");

            Console.WriteLine("Choose Date to calculate Time by date or Length to calculate Time by Length");
            Console.Write("Investment Time (Date/Length) : ");
            var selection = Convert.ToString(Console.ReadLine());

            if (selection == "date")
            {

                Console.Write("Enter Start Date (DD/MM/YYYY) : ");
                DateTime start = Convert.ToDateTime(Console.ReadLine());
                Console.Write("Enter End Date (DD/MM/YYYY) : ");
                DateTime end = Convert.ToDateTime(Console.ReadLine());

                var difference = end.Subtract(start);
                var diffinyears = difference.Days * 0.0027379;


                Console.WriteLine("\n ROI = " + roi + "%");
                Console.WriteLine("\n Difference in Years : {0}", diffinyears + " years");


            }
            else if (selection == "length")
            {
                Console.Write("Enter Years : ");
                var years = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("\n ROI = " + roi + "%");
                Console.WriteLine("\n Investment Length = " + years + " years");

            }
            var InvestmentDifference = AmountReturned - AmountInvested;

            if (InvestmentDifference > 0)
            {
                Console.WriteLine("\n Investment Gain = " + InvestmentDifference);
            }
            else
            {
                Console.WriteLine("\n Investment Loss = " + (-InvestmentDifference));
            }

            Console.ReadLine();
        }
    }
}
