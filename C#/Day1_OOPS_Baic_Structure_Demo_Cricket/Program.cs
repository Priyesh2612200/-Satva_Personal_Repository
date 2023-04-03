using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Day1_OOPS_Baic_Structure_Demo
{
    internal class Program
    {
        //public string FirstName { set; get; }
        //public string LastName { set; get; }
        //public string Location { set; get; }



        static void Main(string[] args)
        {
        }
      
        static void CountryAddDelete()
        {
            string[] Countrys;
            Countrys = new string[] {"India", "Australia", "Bangladesh", "England",
                                       " New Zealand", "Sri Lanka", "USA"};
            //This module allows the user to add a new country or a delete a country.
            // code to be executed
        }
        static void ListplayersCountrywise()
        {
            List<string> India = new List<string>();

            List<string> Australia = new List<string>();

            List<string> Bangladesh = new List<string>();

            List<string> England = new List<string>();

            List<string> NewZealand = new List<string>();

            List<string> SriLanka = new List<string>();

            List<string> USA = new List<string>();


            //Displays the players country wise.
            // code to be executed
        }
        static void Newmatchdetails()
        {
            //Any new match details can be added and viewed through this module.
            // code to be executed
        }
        static void ICCrankings()
        {
            int Batting;
            int Bowling;
            //layers are displayed ICC rankings wise.
            // code to be executed
        }
        static void Matchreports()
        {
            // Match summary reports can be generated with the help of this module.
            // code to be executed
        }
       public static void PlayerReports()
        {
            string name;
            int age;
            string city;
            int height;
            int weight;
            string role;
            string BattingStyle;
            string BowlingStyle;
            string country;

            //Player wise reports can be viewed
            // code to be executed
        }
        static void ViewPlayerdata()
        {
            // code to be executed
            //All the data related to player like no. of centuries, no. of wickets taken,
            //matches played, age, best innings, worst innings etc can be viewed here.
        }
    }
}
