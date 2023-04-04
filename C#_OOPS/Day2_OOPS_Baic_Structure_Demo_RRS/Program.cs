using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Day2_OOPS_Baic_Structure_Demo_RRS
{
    public class Trains
    {
        public string trains = "indian railways";
        public void honk()   // Trains method 
        {
            Console.WriteLine("Poooo, pooo!");
        }
    }
    public class Passenger : Trains
    {
        public string name = "Shri Ashwini Vaishnaw";

        public void passengerstartpoint()
        {

        }
        public void passengerendpoint()
        {

        }
    }
    public class Ticket : Passenger
    {
        public string trainname = "karnavati express";
        public DateTime dateandtime = DateTime.Now;
    }
    public class Payment : Passenger
    {
        public void paymentmethod()
        {

        }

    }
    internal class Program
    {
        static void Main(string[] args)
        {
            Passenger p = new Passenger();
            p.passengerstartpoint();
            p.passengerendpoint();

            Trains trains = new Trains();
            trains.honk();

        }
    }
}
