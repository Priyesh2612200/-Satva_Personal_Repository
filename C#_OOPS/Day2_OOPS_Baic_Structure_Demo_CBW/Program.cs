using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day2_OOPS_Baic_Structure_Demo_CBW
{
    // Abstract class
    abstract class Computer
    {
        public string Name { get; set; }
        // Abstract method (does not have a body)
        public abstract void computername();
        // Regular method
        public void computertype()
        {
            Console.WriteLine("HEllo From super Computer");
        }
    }

    // Derived class (inherit from Computer)
    class Monitor : Computer
    {
        private string size { get; set; }
        private string weight { get; set; }
        public override void computername()
        {
            // The body of computername() is provided here
            Console.WriteLine("Hello from abstract method");
        }
    }

    // Derived class (inherit from Computer)
    class Mouse : Computer
    {
        private string NumberofKey { get; set; }
        public override void computername()
        {
            // The body of computername() is provided here
            Console.WriteLine("Hello from abstract method");
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            Monitor obj = new Monitor(); // Create a obj object
            obj.computername();  // Call the abstract method
            obj.computertype();  // Call the regular method
        }
    }
}
