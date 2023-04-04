using System;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Xml.Linq;


namespace AdmissionPortal
{
    enum Gender
    {
        Male,
        Female,
        Other
    }

    class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public Gender Gender { get; set; }
        public string Email { get; set; }
        public string EncryptedPhone { get; set; }
        public string Address { get; set; }

        public string FullName => $"{FirstName} {LastName}";
        public string DecryptedPhone => DecryptPhone(EncryptedPhone);

        private static readonly byte[] Key = Encoding.ASCII.GetBytes("AdmissionPortalKey");
        private static readonly byte[] IV = Encoding.ASCII.GetBytes("AdmissionPortalIV");

        public static Student FromXml(XElement xml)
        {
            var genderValue = (string)xml.Element("Gender");
            if (!Enum.TryParse<Gender>(genderValue, true, out var gender))
            {
                throw new ArgumentException($"Invalid gender value: {genderValue}");
            }
            return new Student
            {
                Id = (int)xml.Attribute("id"),
                FirstName = (string)xml.Element("FirstName"),
                LastName = (string)xml.Element("LastName"),
                Gender = gender,
                Email = (string)xml.Element("Email"),
                EncryptedPhone = (string)xml.Element("Phone"),
                Address = (string)xml.Element("Address")
            };
        }

        public XElement ToXml()
        {
            return new XElement("Student",
                new XAttribute("id", Id),
                new XElement("FirstName", FirstName),
                new XElement("LastName", LastName),
                new XElement("Gender", Gender.ToString()),
                new XElement("Email", Email),
                new XElement("Phone", EncryptedPhone),
                new XElement("Address", Address));
        }

        public static string EncryptPhone(string phone)
        {
            using (var aesAlg = Aes.Create())
            {
                aesAlg.Key = Key;
                aesAlg.IV = IV;

                var encryptor = aesAlg.CreateEncryptor(aesAlg.Key, aesAlg.IV);

                using (var msEncrypt = new MemoryStream())
                {
                    using (var csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write))
                    {
                        using (var swEncrypt = new StreamWriter(csEncrypt))
                        {
                            swEncrypt.Write(phone);
                        }

                        return Convert.ToBase64String(msEncrypt.ToArray());
                    }
                }
            }
        }

        private static string DecryptPhone(string encryptedPhone)
        {
            var encryptedBytes = Convert.FromBase64String(encryptedPhone);

            using (var aesAlg = Aes.Create())
            {
                aesAlg.Key = Key;
                aesAlg.IV = IV;

                var decryptor = aesAlg.CreateDecryptor(aesAlg.Key, aesAlg.IV);

                using (var msDecrypt = new MemoryStream(encryptedBytes))
                {
                    using (var csDecrypt = new CryptoStream(msDecrypt, decryptor, CryptoStreamMode.Read))
                    {
                        using (var srDecrypt = new StreamReader(csDecrypt))
                        {
                            return srDecrypt.ReadToEnd();
                        }
                    }
                }
            }
        }
    }

    class Program
    {
        static void Main(string[] args)
        {
            while (true)
            {
                Console.WriteLine("1. Admission");
                Console.WriteLine("2. Get Student Detail");
                Console.WriteLine("3. Delete Student");
                Console.WriteLine("4. Exit");

                switch (Console.ReadLine())
                {
                    case "1":
                        Admission();
                        break;
                    case "2":
                        GetStudentDetail();
                        break;
                    case "3":
                        DeleteStudent();
                        break;
                    case "4":
                        return;
                    default:
                        Console.WriteLine("Invalid option");
                        break;
                }

                Console.WriteLine();
            }
        }

        private static void Admission()
        {
            Console.Write("First Name: ");
            var firstName = Console.ReadLine();

            Console.Write("Last Name: ");
            var lastName = Console.ReadLine();

            //Console.Write("Gender (Male/Female/Other): ");
            //var gender = Enum.Parse<Gender>(Console.ReadLine(), true);
            Console.Write("Gender (Male/Female/Other): ");
            var genderInput = Console.ReadLine();
            if (!Enum.TryParse<Gender>(genderInput, true, out var gender))
            {
                Console.WriteLine($"Invalid gender value: {genderInput}");
                // You can choose to handle the error in a different way, such as prompting the user to enter the value again.
                // For simplicity, we'll just exit the program here.
                return;
            }


            Console.Write("Email: ");
            var email = Console.ReadLine();

            Console.Write("Phone: ");
            var phone = Console.ReadLine();

            Console.Write("Address (optional): ");
            var address = Console.ReadLine();

            string path = @"D:\Priyesh\C#\Day9_C\Day9_C\Day9_2\students.xml";
            XDocument studentsXml = XDocument.Load(path);

            studentsXml.Save(path);


            var lastId = studentsXml.Descendants("Student").Attributes("id").Max(id => (int)id);
            var student = new Student
            {
                Id = lastId + 1,
                FirstName = firstName,
                LastName = lastName,
                Gender = gender,
                Email = email,
                EncryptedPhone = Student.EncryptPhone(phone),
                Address = address
            };

            studentsXml.Root.Add(student.ToXml());
            studentsXml.Save(path);

            Console.WriteLine($"Admission successful. Student ID: {student.Id}");
        }

        private static void GetStudentDetail()
        {
            Console.Write("Student ID: ");
            var id = int.Parse(Console.ReadLine());

            string path = @"D:\Priyesh\C#\Day9_C\Day9_C\Day9_2\students.xml";
            XDocument studentsXml = XDocument.Load(path); 

            var studentXml = studentsXml.Descendants("Student").FirstOrDefault(s => (int)s.Attribute("id") == id);

            if (studentXml == null)
            {
                Console.WriteLine("Student not found");
                return;
            }

            var student = Student.FromXml(studentXml);

            Console.WriteLine($"ID: {student.Id}");
            Console.WriteLine($"Name: {student.FullName}");
            Console.WriteLine($"Gender: {student.Gender}");
            Console.WriteLine($"Email: {student.Email}");
            Console.WriteLine($"Phone: {student.DecryptedPhone}");
            Console.WriteLine($"Address: {student.Address}");
        }

        private static void DeleteStudent()
        {
            Console.Write("Student ID: ");
            var id = int.Parse(Console.ReadLine());


            string path = @"D:\Priyesh\C#\Day9_C\Day9_C\Day9_2\students.xml";
            XDocument studentsXml = XDocument.Load(path);

            var studentXml = studentsXml.Descendants("Student").FirstOrDefault(s => (int)s.Attribute("id") == id);

            if (studentXml == null)
            {
                Console.WriteLine("Student not found");
                return;
            }

            studentXml.Remove();
            studentsXml.Save(path);


            Console.WriteLine($"Student with ID {id} deleted successfully");
        }
       
    }
}