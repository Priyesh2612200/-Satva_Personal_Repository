using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day2_OOPS_Baic_Structure_Demo_HMS
{
    class Program
    {
        static void Main(string[] args)
        {
            Hospital c = new Hospital();
            c.details();
            Console.ReadKey();
        }
    }
    public interface IDoctor
    {
        void details();

    }
    public interface IPatient
    {
        void details();

    }
    public interface Ireceptionist
    {
        void details();

    }
    public class Hospital : IDoctor, IPatient, Ireceptionist
    {

        public void details()
        {
            Console.WriteLine("Test Method is Implemented in Child Class");
        }
        
    }
}
