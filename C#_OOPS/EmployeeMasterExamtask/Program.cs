using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using System.Configuration;
using System.Security.Cryptography.X509Certificates;
using System.Globalization;
using Newtonsoft.Json.Converters;

namespace EmployeeMasterExamtask
{

    internal class Program
    {
        static void Main(string[] args)
        {


            List<Employee> employees = new List<Employee>();

            while (true)
            {
                Console.WriteLine("\nPlease select an option:");
                Console.WriteLine("1. Add new employee");
                Console.WriteLine("2. Delete employee");
                Console.WriteLine("3. Exit");

                string input = Console.ReadLine();
                if (input == "1")
                {
                    var employee = new Employee();
                    employee.NewEmployee();
                }
                else if (input == "2")
                {
                    var employeedel = new Employee();
                    employeedel.DeleteEmployee();

                }
                else if (input == "3")
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Invalid input. Please try again.");
                }
            }

            Console.WriteLine("Thank you for using Employee Management System!");



        }
    }
    public class Employee
    {
        enum department
        {
            Sales,
            Marketing,
            Development,
            QA,
            HR,
            SEO

        }
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public DateTime DOB { get; set; }
        public string Gender { get; set; }
        public string Designation { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Postcode { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string DateOfjoining { get; set; }
        public double Totalexperience { get; set; }

        public string Remarks { get; set; }
        public string Department { get; set; }
        public double MonthlySalary { get; set; }

        private bool IsValidEmailAddress(string validemailobj)
        {
            Regex regex = new Regex(@"^([a-zA-Z0-9]+[a-zA-Z0-9\.]*[a-zA-Z0-9]+)@(gmail)\.(com)$");
            return regex.IsMatch(validemailobj);
        }
        private bool IsValidPhoneNumber(string validphoneobj)
        {
            Regex regex = new Regex(@"^[789]\d{9}$");
            return regex.IsMatch(validphoneobj);
        }
        private bool IsValidpincode(int validpincodeobj)
        {
            Regex regex = new Regex(@"[0-9]{6}$");
            return regex.IsMatch(validpincodeobj.ToString());
        }
        private bool NameFormate(string validnameobj)
        {
            Regex regex = new Regex(@"^[A-Z][a-zA-Z]*$");
            return regex.IsMatch(validnameobj);
        }

        public override string ToString()
        {
            return $"EmployeeId: {EmployeeId},Name: {Name},DOB: {DOB}," +
                $"Gender: {Gender},Designation: {Designation},City: {City},State: {State}" +
                 $" Postcode: {Postcode},Phone: {Phone},Email: {Email},DateOfjoining: {DateOfjoining}" +
                 $" Totalexperience: {Totalexperience},Remarks: {Remarks},Department: {Department},MonthlySalary: {MonthlySalary}";
        }
        public void NewEmployee()
        {

            List<Employee> employees = LoadEmployeesFromJsonFile();

            int EmployeeId;

            bool employeeExists;
            do
            {
                Console.WriteLine("Enter EmployeeID(Unique):");
                EmployeeId = Convert.ToInt32(Console.ReadLine());
                employeeExists = employees.Any(e => e.EmployeeId == EmployeeId);
                if (employeeExists)
                {
                    Console.WriteLine("Employee with this ID already exists. Please enter a new ID.");
                }
            }
            while (employeeExists);





            do
            {
                Console.WriteLine("Enter Name;");
                Name = Console.ReadLine();
            }
            while (!NameFormate(Name) || string.IsNullOrEmpty(Name));

            //do
            //{
            //    Console.WriteLine("Enter DOB:");
            //    DOB = Console.ReadLine();
            //}
            //while (string.IsNullOrEmpty(DOB));



            while (true)
            {
                try
                {
                    Console.Write("Enter Date of Birth (dd-MMMM-yyyy): ");
                    string input = Console.ReadLine();



                    //DateTime userDate = DateTime.ParseExact(input, "dd-MMMM-yyyy", CultureInfo.InvariantCulture); // Read and parse user input date in specified format
                    //string formattedDate = userDate.ToString("dd-MMMM-yyyy"); // Format user input date
                    var date = DateTime.Parse(input);
                    string enteredDate = date.ToString("dd-MMM-yyyy");

                    Console.WriteLine("Formatted Date: " + enteredDate); // Output formatted date
                    break; // Exit loop if date is valid
                }
                catch (FormatException)
                {
                    Console.WriteLine("Invalid Date Format. Please enter date in the format (dd-MMMM-yyyy).");
                }
                catch (Exception)
                {
                    Console.WriteLine("Invalid Date of Birth. Please try again.");
                }
            }


            do
            {
                Console.Write("Enter Gender(F for Female,M for Male):-");
                Gender = Console.ReadLine();
                if (!string.IsNullOrEmpty(Gender))
                {
                    if (Gender.ToLower() == "m")
                    {
                        Console.WriteLine("M");
                    }
                    else if (Gender.ToLower() == "f")
                    {
                        Console.WriteLine("F");
                    }
                    else if (Gender != "m" && Gender != "f")
                    {
                        Console.WriteLine("Only Male Or Female Are Allowed");
                    }

                }
            }
            while (string.IsNullOrEmpty(Gender) || (Gender != "m" && Gender != "f"));

            do
            {
                Console.WriteLine("Enter Designation:");
                Designation = Console.ReadLine();
            }
            while (!NameFormate(Designation) || string.IsNullOrEmpty(Designation));

            do
            {
                Console.WriteLine("Enter City:");
                City = Console.ReadLine();
            }
            while (!NameFormate(City) || string.IsNullOrEmpty(City));

            do
            {
                Console.WriteLine("Enter State:");
                State = Console.ReadLine();
            }
            while (!NameFormate(State) || string.IsNullOrEmpty(State));


            do
            {
                Console.WriteLine("Enter Postcode:");
                Postcode = Convert.ToInt32(Console.ReadLine());
            }
            while (!IsValidpincode(Postcode) || Postcode == null);

            string Phone;
            do
            {
                Console.WriteLine("Enter Phone Number");
                Phone = Console.ReadLine();

            }
            while (!IsValidPhoneNumber(Phone) || string.IsNullOrEmpty(Phone));



            do
            {
                Console.WriteLine("Enter Email Address");
                Email = Console.ReadLine();
            }
            while (!IsValidEmailAddress(Email) || string.IsNullOrEmpty(Email));

            do
            {
                Console.WriteLine("Enter Date Of Joining:");
                DateOfjoining = Console.ReadLine();
            }
            while (string.IsNullOrEmpty(DateOfjoining));

            //var employee = new Employee();
            do
            {
                Console.WriteLine("Enter Total Experience:");
                Totalexperience = Convert.ToInt32(Console.ReadLine());

                //double Totalexperience = employee.GetTotalExperience();
                //Console.WriteLine("Total experience: {0} years", Totalexperience);


            }
            while (Totalexperience == null);
            //Console.Write("Date of Joining: ");
            //string dojInput = Console.ReadLine();

            //if (!DateTime.TryParse(dojInput, out DateTime DateOfjoining))
            //{
            //    Console.WriteLine("Invalid date format. Please try again.");
            //    return;
            //}

            //Console.Write("Total Experience (in years): ");

            //TimeSpan experienceTimeSpan = DateTime.Now - DateOfjoining;
            //int totalExperienceInYears = experienceTimeSpan.Days / 365;
            //int totalExperienceInMonths = (experienceTimeSpan.Days % 365) / 30;
            //int totalExperienceInDays = (experienceTimeSpan.Days % 365) % 30;

            //Console.WriteLine($"Total Experience: {totalExperienceInYears} years, {totalExperienceInMonths} months, and {totalExperienceInDays} days.");

            do
            {
                Console.WriteLine("Enter Remarks:");
                Remarks = Console.ReadLine();
            }
            while (string.IsNullOrEmpty(Remarks));


            while (true)
            {
                Console.Write("Department (1=Sales, 2=Marketing, 3=Development, 4=QA, 5=HR, 6=SEO): ");
                int departmentInput = Convert.ToInt32(Console.ReadLine());
                switch (departmentInput)
                {
                    case 1:
                        Department = Convert.ToString(department.Sales);
                        break;
                    case 2:
                        Department = Convert.ToString(department.Marketing);
                        break;
                    case 3:
                        Department = Convert.ToString(department.Development);
                        break;
                    case 4:
                        Department = Convert.ToString(department.QA);
                        break;
                    case 5:
                        Department = Convert.ToString(department.HR);
                        break;
                    case 6:
                        Department = Convert.ToString(department.SEO);
                        break;
                    default:
                        Console.WriteLine("Invalid Operation");
                        break;
                }
                break;
            }


            do
            {
                Console.WriteLine("Enter monthly Salary:");
                MonthlySalary = Convert.ToInt32(Console.ReadLine());
            }
            while (MonthlySalary == null);




            string Myfile = ConfigurationManager.AppSettings["FilePath"];


            //string filePath = "EmployeeData_10_04_23.json";

            if (File.Exists(Myfile))
            {
                string jsonFromFile = File.ReadAllText(Myfile);
                employees = JsonConvert.DeserializeObject<List<Employee>>(jsonFromFile);
            }
            else
            {
                employees = new List<Employee>();
            }


            Employee emp = new Employee
            {
                EmployeeId = EmployeeId,
                Name = Name,
                DOB = DOB,
                Gender = Gender,
                Designation = Designation,
                City = City,
                State = State,
                Postcode = Postcode,
                Phone = Phone,
                Email = Email,
                DateOfjoining = DateOfjoining,
                Totalexperience = Totalexperience,
                Remarks = Remarks,
                Department = Department,
                MonthlySalary = MonthlySalary,
            };
            employees.Add(emp);
            if (employees.Count > 1)
            {
                var sortedemplioyee = employees.OrderByDescending(e => e.MonthlySalary);
                employees = sortedemplioyee.ToList();
            }

            string json = JsonConvert.SerializeObject(employees, Formatting.Indented);

            File.WriteAllText(Myfile, json);

        }

        public static List<Employee> LoadEmployeesFromJsonFile()
        {
            string filePath = ConfigurationManager.AppSettings["FilePath"];

            // check if the file exists
            if (!File.Exists(filePath))
            {
                Console.WriteLine("The employees file does not exist.");
                return new List<Employee>();
            }

            // read the contents of the file
            string json = File.ReadAllText(filePath);

            // deserialize the JSON into a list of Employee objects
            try
            {
                List<Employee> employees = JsonConvert.DeserializeObject<List<Employee>>(json);
                return employees;
            }
            catch (JsonException ex)
            {
                throw new FormatException("Error deserializing JSON file", ex);
            }
        }



        public void DeleteEmployee()
        {
            Console.WriteLine("Enter the EmployeeId to delete:");
            int employeeId = int.Parse(Console.ReadLine());

            // Read the JSON file 
            string Myfile = ConfigurationManager.AppSettings["FilePath"];
            List<Employee> employees = JsonConvert.DeserializeObject<List<Employee>>(File.ReadAllText(Myfile));

            // Find the employee with the matching EmployeeId and remove it from the list
            Employee employeeToDelete = employees.Find(e => e.EmployeeId == employeeId);
            if (employeeToDelete != null)
            {
                employees.Remove(employeeToDelete);
                Console.WriteLine($"Employee with EmployeeId {employeeId} has been deleted.");
            }
            else
            {
                Console.WriteLine($"Employee with EmployeeId {employeeId} does not exist.");
            }

            string json = JsonConvert.SerializeObject(employees, Newtonsoft.Json.Formatting.Indented);
            File.WriteAllText(Myfile, json);

        }




    }
    public static class DateExtensions
    {
        public static string DateFormateExt(this DateTime date, string format)
        {
            return date.ToString(format);
        }
    }



}

