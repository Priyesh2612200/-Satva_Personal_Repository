﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using System.Xml;

namespace Day8_EmployeeDirectory
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Create a C# Console application which creates Employee record and store in json file.");
            Console.WriteLine("----------------------------------------------------------------------");
            var employee = new Employee();
            employee.NewEmployee();


        }
    }

    public class Employee
    {
        enum designation
        {
            Devloper,
            QA,
           
        }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public long PhoneNo { get; set; }
        public string Designation { get; set; }
        public int Salary { get; set; }
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
            return $"FirstName: {FirstName}, LastName: {LastName}, Gender: {Gender}, Email: {Email}, PhoneNo: {PhoneNo}, Designation: {Designation}, Salary: {Salary}";
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
                    Console.WriteLine("Add Employee in JSON File");

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

                    do
                    {
                        Console.Write("Enter Gender:-");
                        Gender = Console.ReadLine();
                        if (!string.IsNullOrEmpty(Gender))
                        {
                            if (Gender.ToLower() == "male")
                            {
                                Console.WriteLine("Male");
                            }
                            else if (Gender.ToLower() == "female")
                            {
                                Console.WriteLine("Female");
                            }
                            else if (Gender != "male" && Gender != "female")
                            {
                                Console.WriteLine("Only Male Or Female Are Allowed");
                            }

                        }
                    }
                    while (string.IsNullOrEmpty(Gender) || (Gender != "male" && Gender != "female"));

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
                        Console.WriteLine("Designation:-");
                        Console.WriteLine("What Designation what You Choose:- Type 0-Devloper & 1-QA");

                        Designation = Console.ReadLine();
                        try
                        {
                            designation finalDesignation = (designation)Convert.ToInt32(Designation);
                            Console.WriteLine(finalDesignation);
                        }
                        catch (FormatException)
                        {
                            Console.WriteLine("Enter Valid Number");
                            continue;
                        }
                    }
                    while (string.IsNullOrEmpty(Designation));


                    Console.WriteLine("Salary");
                    Salary = Convert.ToInt32(Console.ReadLine());
                    if (Salary >= 10000 && Salary <= 50000)
                    {
                        Console.WriteLine(Salary);
                    }
                    else
                    {
                        Console.WriteLine("InCorrect Amount");
                    }


                    //var EmployeeJSON = new Employee
                    Employee emp = new Employee
                    {
                        FirstName = FirstName,
                        LastName = LastName,
                        Gender = Gender,
                        Email = Email,
                        PhoneNo = PhoneNo,
                        Designation = Designation,
                        Salary = Salary
                    };
                    employees.Add(emp);



                    string json = JsonConvert.SerializeObject(employees, Newtonsoft.Json.Formatting.Indented);
                    File.WriteAllText("Employees.json", json);

                    string jsonFromFile = File.ReadAllText("Employees.json");
                    List<Employee> employeesFromFile = JsonConvert.DeserializeObject<List<Employee>>(jsonFromFile);
                    Console.WriteLine("Here My all Data Of Employees Json File:");
                    Console.WriteLine("----------------------------------------------");
                    foreach (Employee emps in employeesFromFile)
                    {
                        Console.WriteLine(emps.ToString());
                    }

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