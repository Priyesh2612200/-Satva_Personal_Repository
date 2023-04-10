using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using System.Xml;


namespace EmployeeMasterExamtask
{
    internal class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Enter 1 to add a new employee, 2 to delete an employee by ID, or 3 to exit:");

            Console.WriteLine("----------------------------------------------------------------------");

            string option = Console.ReadLine();
            switch (option)
            {
                case "1":
                    var employee = new Employee();
                    employee.NewEmployee();

                    break;

                case "2":
                    var employeedel = new Employee();
                    employeedel.DeleteEmployee();

                    break;

                case "3":
                    break;



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
            public string DOB { get; set; }
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
                            Console.WriteLine("Enter EmployeeID(Unique):");
                            EmployeeId = Convert.ToInt32(Console.ReadLine());
                        }
                        while (EmployeeId == null);

                        do
                        {
                            Console.WriteLine("Enter Name;");
                            Name = Console.ReadLine();
                        }
                        while (!NameFormate(Name) || string.IsNullOrEmpty(Name));

                        do
                        {
                            Console.WriteLine("Enter DOB:");
                            DOB = Console.ReadLine();
                        }
                        while (string.IsNullOrEmpty(DOB));

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


                    do
                        {
                            Console.WriteLine("Enter Remarks:");
                            Remarks = Console.ReadLine();
                        }
                        while (string.IsNullOrEmpty(Remarks));

                        do
                        {
                            Console.WriteLine("Department:-");
                            Console.WriteLine("Which Department You Choose:-");
                            Console.WriteLine("Type 0 for Sales");
                            Console.WriteLine("Type 1 for Marketing");
                            Console.WriteLine("Type 2 for Development");
                            Console.WriteLine("Type 3 for QA");
                            Console.WriteLine("Type 4 for HR");
                            Console.WriteLine("Type 5 for SEO");

                            Department = Console.ReadLine();
                            try
                            {
                                department finalDepartment = (department)Convert.ToInt32(Department);
                                Console.WriteLine(finalDepartment);
                            }
                            catch (FormatException)
                            {
                                Console.WriteLine("Enter Valid Number");
                                continue;
                            }
                        }
                        while (string.IsNullOrEmpty(Department));


                        do
                        {
                            Console.WriteLine("Enter monthly Salary:");
                            MonthlySalary = Convert.ToInt32(Console.ReadLine());
                        }
                        while (MonthlySalary == null);



                    //var EmployeeJSON = new Employee
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

                        //if (File.Exists("EmployeeData_10_04_23.json"))
                        //{
                           

                        //}
                        employees.Add(emp);

                        string json = JsonConvert.SerializeObject(employees, Newtonsoft.Json.Formatting.Indented);
                        File.WriteAllText("EmployeeData_10_04_23.json", json);

                        string jsonFromFile = File.ReadAllText("EmployeeData_10_04_23.json");
                        List<Employee> employeesFromFile = JsonConvert.DeserializeObject<List<Employee>>(jsonFromFile);
                        Console.WriteLine("Here My all Data Of Employees Json File:");
                        Console.WriteLine("----------------------------------------------");
                        foreach (Employee emps in employeesFromFile)
                        {
                            Console.WriteLine(emps.ToString());
                        }

                        //Employee p = new Employee();
                        //p.exitusercase();

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
        public void DeleteEmployee()
        {
            Console.WriteLine("Enter the EmployeeId to delete:");
            int employeeId = int.Parse(Console.ReadLine());

            // Read the JSON file 
            List<Employee> employees = JsonConvert.DeserializeObject<List<Employee>>(File.ReadAllText("EmployeeData_10_04_23.json"));

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
            File.WriteAllText("EmployeeData_10_04_23.json", json);

        }
        public double GetTotalExperience()
        {
            DateTime joiningDate = DateTime.Parse(DateOfjoining);
            DateTime currentDate = DateTime.Now;
            TimeSpan experience = currentDate.Subtract(joiningDate);
            return experience.TotalDays / 365.25;


        }
    }

        


    }
    }
