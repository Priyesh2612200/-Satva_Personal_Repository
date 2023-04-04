using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace Day2_OOPS_Baic_Structure_Demo_OMS
{
    class Offices
    {
        public string office_name = "IT";
        public string office_type = "PVT.LTD";
        public string office_places = "Ahemdabad";

        public void HRdepartment()             
        {
           
        }
        public void BDAdepartment()
        {

        }

        public void Testerdepartment()
        {

        }
    }
    class Employees
    {
        public int[] emp_ids = {};
        public string[] emp_names = {};
         
        public void tasksofemps()
        {

        }
    }
    class Officedescription : Offices
    {
        private string office_name = "Satva_solution";
        private int office_id = 301;
        private string office_address = "Science_city";
    }
    class Tasks : Employees
    {
        private string task_name;
        private string task_timing;
    }
    class Attendance :  Offices
    {
        private string attendance_emp_id = "001";

        public void attendanceempid()
        {

        }

    }
    class Timemanage : Offices
    {
        private Boolean working_hours;
    }
   class Program
    {
        static void Main(string[] args)
        {
            //create obj from mainclass 
            Offices obj = new Officedescription();
            obj.HRdepartment();
            obj.BDAdepartment();
            obj.Testerdepartment();

            //create obj from derived class
            Attendance obj2 = new Attendance();
            obj2.attendanceempid();

            //create obj from mainclass 
            Employees obj3 = new Employees();
            obj3.tasksofemps();
        }
    }
}
