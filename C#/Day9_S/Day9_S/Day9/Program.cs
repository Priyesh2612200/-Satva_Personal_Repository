using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using System.Xml;
using System.Xml.Serialization;

namespace Day8_EmployeeDirectory
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Create a C# Console application which creates students record and store in XML file.");
            Console.WriteLine("----------------------------------------------------------------------");
            var employee = new Employee();
            employee.NewEmployee();

            
        }
    }

    public class Employee
    {
        enum gender
        {
          Male,
          Female
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Fullname { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public long PhoneNo { get; set; }
        public string Address { get; set; }
        
        private bool IsValidEmailAddress(string s)
        {
            Regex regex = new Regex(@"^([a-zA-Z0-9]+[a-zA-Z0-9\.]*[a-zA-Z0-9]+)@(gmail)\.(com)$");
            return regex.IsMatch(s);
        }
        private bool IsValidPhoneNumber(string s)
        {
            Regex regex = new Regex(@"^[789]\d{9}$");
            return regex.IsMatch(s);
        }
        private bool NameFormate(string s)
        {
            Regex regex = new Regex(@"^[A-Z][a-zA-Z]*$");
            return regex.IsMatch(s);
        }

        public override string ToString()
        {
            return $"FirstName: {FirstName}, LastName: {LastName}, Fullname: {Fullname}, Gender: {Gender}, Email: {Email}, PhoneNo: {PhoneNo}, Address: {Address} ]";
        }
        public void NewEmployee()
        {
            List<Employee> employees = new List<Employee>();
            bool addMore = true;
            while (addMore)
            {
                bool flag;

                do
                {
                    Console.WriteLine("Add Students Details in XML File");

                    do
                    {
                        Console.WriteLine("Enter First Name");
                        FirstName = Console.ReadLine();
                    }
                    while (!NameFormate(FirstName) || string.IsNullOrEmpty(FirstName));

                    do
                    {
                        Console.WriteLine("Enter Last Name");
                        LastName = Console.ReadLine();
                    }
                    while (!NameFormate(LastName) || string.IsNullOrEmpty(LastName));

                    Console.WriteLine("Fullname:" + FirstName + LastName);

                    do
                    {
                        Console.WriteLine("Gender:-");
                        Console.WriteLine("Type 0 for Male and Type 1 for Female");

                        Gender = Console.ReadLine();
                        try
                        {
                            gender obj = (gender)Convert.ToInt32(Gender);
                            Console.WriteLine(obj);
                        }
                        catch (FormatException)
                        {
                            Console.WriteLine("Enter Valid Number");
                            continue;
                        }
                    }
                    while (string.IsNullOrEmpty(Gender));


                   

                    do
                    {
                        Console.WriteLine("Enter Email Address");
                        Email = Console.ReadLine();
                    }
                    while (!IsValidEmailAddress(Email) || string.IsNullOrEmpty(Email));
                    string phone;
                    do
                    {
                        Console.WriteLine("Enter Phone Number");
                        phone = Console.ReadLine();
                        PhoneNo = Convert.ToInt64(phone);
                    }
                    while (!IsValidPhoneNumber(phone));

                    


                    do
                    {
                        Console.WriteLine("Enter Your Address");
                        Address = Console.ReadLine();
                    }
                    while (string.IsNullOrEmpty(Address));




                    //var EmployeeJSON = new Employee
                    Employee emp = new Employee
                    {
                        FirstName = FirstName,
                        LastName = LastName,
                        Gender = Gender,
                        Email = Email,
                        PhoneNo = PhoneNo,
                        Address = Address
                    };
                    employees.Add(emp);

                    //xml file store
                    Employee emps = new Employee();
                    XmlSerializer xml = new XmlSerializer(typeof(Employee));
                    TextWriter txtwriter = new StreamWriter(@"D:\Priyesh\C#\Day9_S\Day9_S\Day9\XMLFile.xml");
                    xml.Serialize(txtwriter, emps);
                    txtwriter.Close();

                    Console.WriteLine("Add more employees? (Y/N): ");
                    if (Console.ReadLine().ToUpper() == "Y")
                    {
                        flag = true;
                    }
                    else if (Console.ReadLine().ToUpper() == "N")
                    {
                        flag = false;
                    }
                    else
                    {
                        flag = false;
                    }
                }
                while (flag);
            }
        }


    }


}