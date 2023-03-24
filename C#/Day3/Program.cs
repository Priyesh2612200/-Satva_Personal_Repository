using Day3;
using System;using System.Collections.Generic;using System.Linq;using System.Text;using System.Threading.Tasks;namespace Day3_Task{    internal class Program    {        static void Main(string[] args)        {

            int i = 0;            do            {                Console.WriteLine("Enter your program number:");                int age = Convert.ToInt32(Console.ReadLine());                switch (age)                {                    case 1:
                        methods.filereadappend();                        break;                    case 2:                        methods.filecreateandread();                        break;                    case 3:
                        methods.filecreatearrayinstring();                        break;                    case 4:
                        methods.appendsometext();                        break;                    case 5:
                        methods.readfirstlinefromfile();                        break;
                    case 6:
                        methods.countlines();
                        break;
                    case 7:
                        methods.simplexception();
                        break;
                    case 8:
                        methods.dividebyzeroexception();
                        break;
                    case 9:
                        methods.extensiondateformate();
                        break;
                    case 10:
                        methods.argumentnullexception();
                        break;
                    case 11:
                        methods.emailencrypt();
                        break;
                    case 12:
                        methods.retrivepass();
                        break;

                }                Console.WriteLine("Continue Or Exit");
                var input = Console.ReadLine();                if (input == "Continue")                {                    i++;                }                else if (input == "Exit")                {                    break;                }

            }

            while (i < 5);        }    }}