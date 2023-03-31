using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using System.IO;
using System.Net;
using System.Security.AccessControl;
using System.Net.Mail;
using System.Text.RegularExpressions;
using Newtonsoft.Json.Linq;


//using System.ComponentModel.DataAnnotations;
//enum Designation { Developer, QA }
namespace Day8_Employee_record_store_in_json
{

    public class Person
    {
        enum designation
        {
            Devloper,
            QA,
        }

        public string FRISTNAME { get; set; }
      
        public  string LASTNAME { get; set; }
       
        public  string GENDER { get; set; }
      
        public  string EMAIL { get; set; }
      
        public  string PHONE { get; set; }
   
        public  string DESIGNATION { get; set; }

       


        public  int SALARY { get; set; }

      
        public override string ToString()
        {
            return $"FirstName: {FRISTNAME}, LastName: {LASTNAME}, Gender: {GENDER}, EmailAddress: {EMAIL},PhoneNumber: {PHONE},Designation: {DESIGNATION}" +
                $"Salary: {SALARY}";
        }

      
    }
    internal class Program
    {


        static void Main(string[] args)
        {
           
            string firstname;

                do
                {

                    Console.WriteLine("enter your first name*:");
                    firstname = Console.ReadLine();
                }
                while (string.IsNullOrEmpty(firstname));




                string Lastname;
                do
                {

                    Console.WriteLine("Enter Youe Last Name*:");
                    Lastname = Console.ReadLine();
                }
                while (string.IsNullOrEmpty(Lastname));


                string Gender;
                do
                {

                    Console.WriteLine("Enter Your Gender*:");
                    Gender = Console.ReadLine();
                }
                while (string.IsNullOrEmpty(Gender));


                string EmailAddress;
                do
                {
                    Console.WriteLine("Enter your Email Address*:");
                    EmailAddress = Console.ReadLine();
                    if (IsValidEmail(EmailAddress))
                    {
                        Console.WriteLine("Email Address is valid.");
                    }
                    else
                    {
                        Console.WriteLine("Email Address is not valid.");
                    }
                } while (!IsValidEmail(EmailAddress));


                string PhoneNumber;
                do
                {
                    Console.WriteLine("Enter Your Phone Number*:");
                    PhoneNumber = Console.ReadLine();


                    if (IsValidnumber(PhoneNumber))
                    {
                        Console.WriteLine("Phone Number is valid.");
                    }
                    else
                    {
                        Console.WriteLine("Phone Number is not valid.");
                    }

                } while (!IsValidnumber(PhoneNumber));


                Console.WriteLine("Enter Your Designation*:");
                var Designation = Console.ReadLine();

                //string Designation;


                //do
                //{
                //    Console.WriteLine("Designation:-");
                //    Console.WriteLine("What Designation what You Choose:- Type 1 Ya 2 Number");

                //    Designation = Console.ReadLine();
                //    try
                //    {
                //        designation finalDesignation = (designation)Convert.ToInt32(Designation);
                //        Console.WriteLine(finalDesignation);
                //    }
                //    catch (FormatException)
                //    {
                //        Console.WriteLine("Enter Valid Number");
                //        continue;
                //    }
                //}
                //while (string.IsNullOrEmpty(Designation));




                Console.WriteLine("Enter Your salary*:");
                var salary = Convert.ToInt32(Console.ReadLine());

                if (salary < 10000 || salary > 50000)
                {
                    Console.WriteLine("Salary must be between 10,000 and 50,000.");
                }
                else
                {
                    Console.WriteLine("Correct");
                }
                //int salary;
                //do
                //{

                //    Console.WriteLine("Enter Your salary*:");
                //    salary = Convert.ToInt32(Console.ReadLine());
                //    if (salary < 10000 || salary > 50000)
                //    {
                //        Console.WriteLine("Salary must be between 10,000 and 50,000.");
                //    }
                //    else
                //    {
                //        Console.WriteLine("Correct");
                //    }
                //}
                //while (int.IsNullOrEmpty(salary));

                //Create a person object
                var person = new Person
                {
                    FRISTNAME = firstname,
                    LASTNAME = Lastname,
                    GENDER = Gender,
                    EMAIL = EmailAddress,
                    PHONE = PhoneNumber,
                    DESIGNATION = Designation,
                    SALARY = salary

                };

                //Serialize
                var json = JsonConvert.SerializeObject(person);
                System.IO.File.WriteAllText("person.json", json);

                // deserialize
                var jsonFromFile = File.ReadAllText("person.json");
                var personFromFile = JsonConvert.DeserializeObject<Person>(jsonFromFile);
                Console.WriteLine(personFromFile.ToString());
            }
            
        //emailvalidation
        public static bool IsValidEmail(string emailAddress)
        {
            if (string.IsNullOrEmpty(emailAddress))
            {
                Console.WriteLine("Please Enter Input");
            }

            try
            {
                // Use Regex to validate email format
                var regex = new Regex(@"^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$");
                return regex.IsMatch(emailAddress.Trim());
            }
            catch
            {
                return false;
            }
        }
        //number validation
        public static bool IsValidnumber(string phonenumber)
        {
            if (string.IsNullOrEmpty(phonenumber))
            {
                Console.WriteLine("Please Enter Number");
            }

            try
            {
                // Use Regex to validate email format
                var regex = new Regex(@"^(\+[0-9]{10})$");
                return regex.IsMatch(phonenumber.Trim());
            }
            catch
            {
                return false;
            }
        }
        
    }
}

