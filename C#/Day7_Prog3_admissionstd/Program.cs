using System;
using System.Collections.Generic;

namespace Day7_Prog3_admissionstd{


internal class Program
{

        //Admission of students

        //     static void Main(string[] args)
        //     {
        //     List<string> students = new List<string>();
        //     string studentName;
        //     Console.WriteLine("Enter the names of the students (type 'done' when finished): ");

        //     do
        //     {
        //         studentName = Console.ReadLine();
        //         if (studentName != "done")
        //         {
        //             students.Add(studentName);
        //         }
        //     } while (studentName != "done");

        //     // Print message and total number of students
        //     Console.WriteLine("Admission completed! Total number of students: " + students.Count);

        //     // Removing leaving students
        //     Console.WriteLine("Enter the names of the students who are leaving (type 'done' when finished): ");
        //     do
        //     {
        //         studentName = Console.ReadLine();
        //         if (studentName != "done")
        //         {
        //             students.Remove(studentName);
        //         }
        //     } while (studentName != "done");

        //     // Printing best students who are receiving awards
        //     Console.WriteLine("Enter the names of the best students who are receiving awards (type 'done' when finished): ");
        //     List<string> bestStudents = new List<string>();
        //     do
        //     {
        //         studentName = Console.ReadLine();
        //         if (studentName != "done")
        //         {
        //             bestStudents.Add(studentName);
        //         }
        //     } while (studentName != "done");

        //     Console.WriteLine("Best students receiving awards: ");
        //     foreach (string student in bestStudents)
        //     {
        //         Console.WriteLine("- " + student);

        //     }
        //     Console.WriteLine("After leaving Students List: ");
        //     students.ForEach(p => Console.WriteLine(p));
        //     Console.ReadLine(); // Wait for user to press enter befor  e closing the program
        //}




        public static int AdmitStudents(List<string> students)
        {

            string studentName;

            Console.WriteLine("Enter the names of the students (type 'done' when finished): ");

            do
            {
                studentName = Console.ReadLine();
                if (studentName != "done")
                {
                    students.Add(studentName);
                }
            } while (studentName != "done");

            Console.WriteLine("Admission completed! Total number of students: " + students.Count);

            return students.Count;
        }

        public static void RemoveStudents(List<string> students)
        {

            string studentName;
            Console.WriteLine("Enter the names of the students who are leaving (type 'done' when finished): ");
            do
            {
                studentName = Console.ReadLine();
                if (studentName != "done")
                {
                    students.Remove(studentName);
                }
            } while (studentName != "done");

            Console.WriteLine("Remaining students: ");
            students.ForEach(p => Console.WriteLine(p));

        }

        public static void AwardsStudents()
        {
            Console.WriteLine("Enter the names of the best students who are receiving awards (type 'done' when finished): ");
            List<string> bestStudents = new List<string>();
            string studentName;
            do
            {
                studentName = Console.ReadLine();
                if (studentName != "done")
                {
                    bestStudents.Add(studentName);
                }
            } while (studentName != "done");

            Console.WriteLine("Best students receiving awards: ");
            foreach (string student in bestStudents)
            {
                Console.WriteLine("- " + student);
            }

            Console.ReadLine(); // Wait for user to press enter before closing the program
        }
    }
}
