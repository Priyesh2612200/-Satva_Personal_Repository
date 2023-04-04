using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace Day2_OOPS_Baic_Structure_Demo_OTT_Platform
{
    sealed class OTTPlatformadmin
    {
        public void ragistration()
        { 
        }
        public void login()
        {
        }
    }

    public class Existinguser : OTTPlatformadmin
    {
        public void searchresult()
        {

        }
    }

    public class Newuser : Existinguser
    {

    }
    class Program
    {
        static void Main(string[] args)
        {
            // Create a object
            OTTPlatformadmin obj = new OTTPlatformadmin();
            obj.ragistration();
            obj.login();

            Existinguser obj2 = new Existinguser();
            obj2.searchresult();


        }
    }
}
