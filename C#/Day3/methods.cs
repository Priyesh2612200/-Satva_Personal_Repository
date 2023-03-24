using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Net.Mime.MediaTypeNames;

namespace Day3
{
    public static class DateTimeExtensions
    {
        public static string DateFormat(this DateTime date,string format)
        {
            return date.ToString(format);
        }
    }

    internal class methods
    {
        public static void filereadappend()
        {
            string path = @"D:\Priyesh\C#\Day3\my_file.txt";

            if (File.Exists(path))
            {
                File.Delete(path);
            }

            using (StreamWriter sw = File.CreateText(path)) ;

            using (StreamWriter writer = new StreamWriter(path))
            {
                writer.WriteLine("Swami Vivekananda");
                writer.WriteLine("Bhagat Singh");
                writer.WriteLine("Shivaji Maharaj");
            }

        }

        public static void filecreateandread()
        {
            string path = @"D:\Priyesh\C#\Day3\my_file2.txt";

            if (File.Exists(path))
            {
                File.Delete(path);
            }

            using (StreamWriter sw = File.CreateText(path)) ;

            using (StreamWriter writer = new StreamWriter(path))
            {
                writer.WriteLine("Swami Vivekananda");
                writer.WriteLine("Bhagat Singh");
                writer.WriteLine("Shivaji Maharaj");
            }
            // Read a file
            string readText = File.ReadAllText(path);
            Console.WriteLine(readText);

        }

        public static void filecreatearrayinstring()
        {
            string fileName = @"D:\Priyesh\C#\Day3\my_file3.txt";
            string[] ArrLines;
            int n, i;

            Console.Write("\n\n Create a file and write an array of strings  :\n");
            Console.Write("---------------------------------------------------\n");

            if (File.Exists(fileName))
            {
                File.Delete(fileName);
            }

            Console.Write(" Input number of lines to write in the file  :");
            n = Convert.ToInt32(Console.ReadLine());
            ArrLines = new string[n];
            Console.Write(" Input {0} strings below :\n", n);
            for (i = 0; i < n; i++)
            {
                Console.Write(" Input line {0} : ", i + 1);
                ArrLines[i] = Console.ReadLine();
            }
            System.IO.File.WriteAllLines(fileName, ArrLines);

            using (StreamReader sr = File.OpenText(fileName))
            {
                string s = "";
                Console.Write("\n The content of the file is  :\n", n);
                Console.Write("----------------------------------\n");
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(" {0} ", s);
                }
                Console.WriteLine();
            }

        }

        public static void appendsometext()
        {
            string fileName = @"D:\Priyesh\C#\Day3\my_file.txt";


            using (StreamReader sr = File.OpenText(fileName))
            {
                string s = "";
                Console.WriteLine(" Here is the content of the file mytest.txt : ");
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                }
                Console.WriteLine("");
            }
            using (System.IO.StreamWriter file = new System.IO.StreamWriter(@"D:\Priyesh\C#\Day3\my_file.txt", true))
            {
                file.WriteLine("Maharana Pratap.");
                file.WriteLine("Chhatrapati Sambhaji Maharaj");
            }
            using (StreamReader sr = File.OpenText(fileName))
            {
                string s = "";
                Console.WriteLine(" Here is the content of the file after appending the text : ");
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                }
                Console.WriteLine("");
            }

        }

        public static void readfirstlinefromfile()
        {
            string fileName = @"D:\Priyesh\C#\Day3\my_file.txt";

            using (StreamReader sr = File.OpenText(fileName))
            {
                string s = "";
                Console.WriteLine(" Here is the content of the file mytest.txt : ");
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                }
                Console.WriteLine("");
            }
            Console.Write("\n The content of the first line of the file is :\n");
            if (File.Exists(fileName))
            {
                string[] lines = File.ReadAllLines(fileName);
                Console.Write(lines[0]);
            }
            Console.WriteLine();
        }

        public static void countlines()
        {
            string fileName = @"D:\Priyesh\C#\Day3\my_file.txt";

            using (StreamReader sr = File.OpenText(fileName))
            {
                string s = "";
                Console.WriteLine(" Here is the content of the file mytest.txt : ");
                while ((s = sr.ReadLine()) != null)
                {
                    Console.WriteLine(s);
                }
                Console.WriteLine("");
            }

            int count = File.ReadAllLines("D:\\Priyesh\\C#\\Day3\\my_file.txt").Length;
            Console.WriteLine("Number of lines: " + count);

        }

        public static void simplexception()
        {
            int[] arr = { 1, 2, 3, 4, 5 };

            for (int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }

            try
            {
                Console.WriteLine(arr[7]);

            }
            catch (IndexOutOfRangeException e)
            {
                Console.WriteLine("An Exception has occurred : {0}", e.Message);
            }
        }
        public static void dividebyzeroexception()
        {
            Console.WriteLine("Enter First Number:");
            int num1 = Convert.ToInt32(Console.ReadLine());

            Console.WriteLine("Enter Second Number:");
            int num2 = Convert.ToInt32(Console.ReadLine());
            try
            {
                var result = num1 / num2;
                Console.WriteLine(result);
            }
            catch (DivideByZeroException e)
            {
                Console.Write(e.Message);
                Console.ReadLine();
            }
        }

        public static void extensiondateformate()
        {
            DateTime today = DateTime.Today;
            Console.Write("Enter formate(eg: dd/mm/yyyy):");
            string userFormat=Console.ReadLine();

            string formattedDate = today.ToString(userFormat);

            Console.WriteLine(formattedDate);
            Console.ReadKey();
      
        }

        public static void argumentnullexception()
        {
            string val = null;
            try
            {
                int res = int.Parse(val);
            }
            catch (ArgumentNullException e)
            {
                Console.Write(e.Message);
                Console.ReadLine();
            }

        }
        public static void emailencrypt()
        {
            var email = "priyesh1611@gmail.com";
            string path = @"D:\Priyesh\C#\Day3\my_file4.txt";
            var encryptedEmail = EncryptedString(email);
            var origin = DecryptedString(encryptedEmail);
           
            if (File.Exists(path))
            {
                File.Delete(path);
            }

          
            using (StreamWriter writer = new StreamWriter(path))
            {
                writer.WriteLine(encryptedEmail);
              
            }
            using (StreamReader reader = new StreamReader(path))

            {
                Console.WriteLine(origin);
            }
        }
        private static string EncryptedString(string strEncrypted)
        {
            byte[] b = System.Text.ASCIIEncoding.ASCII.GetBytes(strEncrypted);
            string encrypted = Convert.ToBase64String(b);
            return encrypted;
        }
        private static string DecryptedString(string encrString)
        {
            byte[] b;
            string decrypted;
            try
            {
                b = Convert.FromBase64String(encrString);
                decrypted = System.Text.ASCIIEncoding.ASCII.GetString(b);
            }
            catch (FormatException fe)
            {
                decrypted = " ";
            }
            return decrypted;
        }
        public static void retrivepass()
        {
            string configvalue1 = ConfigurationManager.AppSettings["password"];
            var encryptedPass = EncryptedString(configvalue1);
            string path = @"D:\Priyesh\C#\Day3\my_file5.txt";

            if (File.Exists(path))
            {
                File.Delete(path);
            }

            using (StreamWriter sw = File.CreateText(path)) ;

            using (StreamWriter writer = new StreamWriter(path))
            {
              
                writer.WriteLine(encryptedPass);
            }

        }
    }
   
}
