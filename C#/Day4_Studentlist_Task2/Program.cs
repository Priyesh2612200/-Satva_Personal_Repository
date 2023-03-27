using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Day4_Studentlist_Task2.Program;

namespace Day4_Studentlist_Task2
{
    public class Program
    {
        public class Student
        {

            public int studentID { get; set; }
            public string studentName { get; set; }
            public string studentDOB { get; set; }
            public int studentRollNo { get; set; }
            public string studentEmail { get; set; }
            public double studentGPASem1 { get; set; }
            public double studentGPASem2 { get; set; }
            public double studentGPASem3 { get; set; }
            public double studentGPASem4 { get; set; }
            public double studentGPASem5 { get; set; }

        }
        public static void Main(string[] args)
        {
            Student[] students = new Student[3];


            for (int i = 0; i < 3; i++)
            {
                Console.WriteLine($"Enter information for student {i + 1}");

                Console.Write("studentID: ");
                int studentid = int.Parse(Console.ReadLine());

                Console.Write("studentName: ");
                string studentname = Console.ReadLine();

                Console.Write("studentDOB: ");
                string studentdob = Console.ReadLine();


                Console.Write("studentRollNo: ");
                int studentrollno = int.Parse(Console.ReadLine());

                Console.Write("studentEmail: ");
                string studentemail = Console.ReadLine();


                Console.Write("studentGPASem1: ");
                double studentgpasem1 = double.Parse(Console.ReadLine());


                Console.Write("studentGPASem2: ");
                double studentgpasem2 = double.Parse(Console.ReadLine());


                Console.Write("studentGPASem3: ");
                double studentgpasem3 = double.Parse(Console.ReadLine());


                Console.Write("studentGPASem4: ");
                double studentgpasem4 = double.Parse(Console.ReadLine());


                Console.Write("studentGPASem5: ");
                double studentgpasem5 = double.Parse(Console.ReadLine());

                students[i] = new Student
                {
                    studentID = studentid,
                    studentName = studentname,
                    studentDOB = studentdob,
                    studentRollNo = studentrollno,
                    studentEmail = studentemail,
                    studentGPASem1 = studentgpasem1,
                    studentGPASem2 = studentgpasem2,
                    studentGPASem3 = studentgpasem3,
                    studentGPASem4 = studentgpasem4,
                    studentGPASem5 = studentgpasem5,

                };
            }

            Console.WriteLine("\nStudents Information:");
            foreach (Student student in students)
            {
                Console.WriteLine($"studentID: {student.studentID},studentName: {student.studentName}," +
                    $"studentDOB: {student.studentDOB},studentRollNo: {student.studentRollNo},studentEmail: {student.studentEmail}," +
                    $"studentGPASem1: {student.studentGPASem1},studentGPASem2: {student.studentGPASem2},studentGPASem3: {student.studentGPASem3}, " +
                    $"studentGPASem4: {student.studentGPASem4},studentGPASem5: {student.studentGPASem5}");


                Console.WriteLine("\n Students CGPA");
                double totalCGPA = CalculateTotalCGPA(student);
                Console.WriteLine("Total CGPA: " + totalCGPA);

                //Console.WriteLine("\n Student highest  CGPA");
                //double maxCGPA = Maxcgpa(student);
                //Console.WriteLine("MAX CGPA: " + maxCGPA);



            }
          
            Console.ReadKey();
        }
        public static double CalculateTotalCGPA(Student student)
        {
            double totalGPA = (student.studentGPASem1 + student.studentGPASem2 + student.studentGPASem3 + student.studentGPASem4 + student.studentGPASem5) / 5.0;
            

            return totalGPA;
        }
        //public static double Maxcgpa(Student student)
        //{
        //    double totalCGPA = CalculateTotalCGPA(student);
        //    double maxcgpa = Math.Max(totalCGPA,0);
        //    return maxcgpa;
           

        //}
    }
}