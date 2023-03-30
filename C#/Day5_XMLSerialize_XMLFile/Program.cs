using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Serialization;

namespace Day5_XMLSerialize_XMLFile
{
    internal class Program
    {
  
        static void Main(string[] args)
        {
            Student1 student = new Student1();
            XmlSerializer xml = new XmlSerializer(typeof(Student1));
            TextWriter txtwriter = new StreamWriter(@"D:\Priyesh\C#\Day5_XMLSerialize_XMLFile\progoutput.XML");
            xml.Serialize(txtwriter, student);
            txtwriter.Close();
        }

    }
    public class Student1
    {
        public int Id = 1;
        public string Name = "Priyesh Poptani";
        public string Email = "priyeshpoptani1611@gmail.com";
        public string Address = "Amreli";
    }
}
