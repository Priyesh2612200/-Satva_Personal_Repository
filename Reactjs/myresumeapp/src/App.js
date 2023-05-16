import './App.css';
import profileimg from "../src/Profile_Photo.jpg";




function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 p-0'>
            <img src={profileimg} className='img-fluid' alt="Prifile Photo" />
          </div>
          <div className='col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 p-0 name-data '>
            <h1 className='mt-4'> PRIYESH</h1>
            <h2>P O P T A N I</h2>
            <h3>Marketing Manager</h3>
          </div>
        </div>


        <div className="row">
          <div className='col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 leftside-text p-0'>
            <div className='px-5 mt-5'>
              <h3 style={{ color: "#3e3e3f" }}>ABOUT ME</h3>
              <p>Hi. My name is Travis Anderson lorem
                empus id fringilla molestie ornare diam in
                olestie ipsum etium rosn ollicitudin est,
                porttitor amet hitmassa Done cporttitor
                dolor shit dolor kiren lorem nisl molestie
                pretium etfring. is the shitp lorem ipcum
                retiumci amet is tudin olestie rosen. </p>

              <div className='mt-5'>
                <h3 style={{ color: "#3e3e3f" }}>CONTACTS</h3>
                <div><i className="fa fa-phone"></i>&nbsp;&nbsp;&nbsp;+92 232 534 234 </div><br></br>
                <div><i className="fa fa-envelope"></i>&nbsp;&nbsp;&nbsp;priyeshpoptani@gmail.com </div><br></br>
                <div><i className="fa fa-globe"></i>&nbsp;&nbsp;&nbsp;www.satvasolutions.com </div><br></br>
                <div><i className="fa fa-address-card-o"></i>&nbsp;&nbsp;&nbsp;715 Mataram City New York</div>
              </div>

              <div className='mt-5'>
                <h3 style={{ color: "#3e3e3f" }}>SKILLS</h3>
                <div className='d-flex'>
                  <div style={{ width: '100px' }}>Photoshop</div>
                  <div><i className="fa fa-battery-4 "></i></div>
                </div>

                <div className='d-flex'>
                  <div style={{ width: '100px' }}>Illustrator</div>
                  <div><i className="	fa fa-battery-3 "></i></div>
                </div>

                <div className='d-flex'>
                  <div style={{ width: '100px' }}>Indesign</div>
                  <div><i className="fa fa-battery-2"></i></div>
                </div>

                <div className='d-flex'>
                  <div style={{ width: '100px' }}>Adobe XD</div>
                  <div><i className="fa fa-battery-3"></i></div>
                </div>

                <div className='d-flex'>
                  <div style={{ width: '100px' }}>Sketch</div><div><i className="	fa fa-battery-1"></i>
                  </div>
                </div>

              </div>

              <div className='mt-5'>
                <h3 style={{ color: "#3e3e3f" }}>INTEREST</h3>
                <div>
                  <div className='skillfirstrow'>
                    <i className="fa fa-bicycle" style={{ fontSize: "35px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-gamepad" style={{ fontSize: "35px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-camera" style={{ fontSize: "35px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
                <br></br>
                <div>
                  <div className='skillfirstrow'>
                    <i className="fa fa-music" style={{ fontSize: "35px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-puzzle-piece" style={{ fontSize: "35px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa fa-book" style={{ fontSize: "35px" }}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 col-xxl-8 p-0 rightside-text'>
            <div className='px-5 mt-5'>
              <h3 style={{ color: "#3e3e3f" }}>EXPERIENCE</h3>
              <h5 style={{ color: "#3e3e3f" }}>LEAD PRODUCT DESIGNER 2016 - Present</h5>
              <h5 style={{ color: "#3e3e3f" }}>INIPAGI STUDIO</h5>

              <div className='d-flex'>
                <div><i className="fa fa-hand-o-right"></i></div>
                <div className='mx-3 textsize'>
                  Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor
                  tfringilla. lorem lorem ipsum. ollcitudin est dolor time. Done cporttitor dolor kiren
                </div>
              </div>
              <br></br>


              <div className='d-flex'>
                <div><i className="fa fa-hand-o-right"></i></div>
                <div className='mx-3 textsize'>
                  Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor
                  tfringilla. lorem lorem ipsum. ollcitudin est dolor time. Done cporttitor dolor kiren
                </div>
              </div>
              <br></br>


              <div className='d-flex'>
                <div><i className="fa fa-hand-o-right"></i></div>
                <div className='mx-3 textsize'>
                  Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor
                  tfringilla. lorem lorem ipsum. ollcitudin est dolor time. Done cporttitor dolor kiren
                </div>
              </div>
              <br></br>

              <h5 style={{ color: "#3e3e3f" }}>SENIOR PRODUCT DESIGNER 2013 - 2016</h5>
              <h5 style={{ color: "#3e3e3f" }}>INIPAGI STUDIO</h5>
              <div className='d-flex'>
                <div><i className="fa fa-hand-o-right"></i></div>
                <div className='mx-3 textsize'>
                  Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor
                  tfringilla. lorem lorem ipsum. ollcitudin est dolor time. Done cporttitor dolor kiren
                </div>
              </div>
              <br></br>

              <div className='d-flex'>
                <div><i className="fa fa-hand-o-right"></i></div>
                <div className='mx-3 textsize'>
                  Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor
                  tfringilla. lorem lorem ipsum. ollcitudin est dolor time. Done cporttitor dolor kiren
                </div>
              </div>
              <br></br>

              <div className='d-flex'>
                <div><i className="fa fa-hand-o-right"></i></div>
                <div className='mx-3 textsize'>
                  Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor
                  tfringilla. lorem lorem ipsum. ollcitudin est dolor time. Done cporttitor dolor kiren
                </div>
              </div>

            </div>


            <br></br>
            <div className='px-5 mt-4'>
              <h3 style={{ color: "#3e3e3f" }}>EXPERIENCE</h3>
              <h5 style={{ color: "#3e3e3f" }}>MASTER OF ART 2013 - 2015</h5>
              <h5 style={{ color: "#3e3e3f" }}>YELLOW UNIVERSITY</h5>
              <div className='d-flex'>
                <div><i className="fa fa-hand-o-right"></i></div>
                <div className='mx-3 textsize'>
                  Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor
                  tfringilla. lorem lorem ipsum. ollcitudin est dolor time. Done cporttitor dolor kiren
                </div>
              </div>
            </div>

            <br></br>
            <div className='px-5 mt-4'>
              <h5 style={{ color: "#3e3e3f" }}>BACHELOR OF ART 2011 - 2013</h5>
              <h5 style={{ color: "#3e3e3f" }}>YELLOW UNIVERSITY</h5>
              <div className='d-flex'>
                <div><i className="fa fa-hand-o-right"></i></div>
                <div className='mx-3 textsize pb-5'>
                  Porttitor amet massa Done cporttitor dolor et nisl molestie ium feliscon lore ipsum dolor
                  tfringilla. lorem lorem ipsum. ollcitudin est dolor time. Done cporttitor dolor kiren
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
