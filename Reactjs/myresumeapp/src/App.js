import './App.css';

import Header from './Components/Header';
import Aboutme from './Components/AboutMe';
import Contacts from './Components/Contacts';
import Skiils from './Components/Skills';
import Interest from './Components/Interest';
import Experience from './Components/Experience';


function App() {

  const firstname = 'PRIYESH'
  const lastname = 'P O P T A N I'
  const profile = "Software Developer"

  const contactsinfo = {
    phonenumbre: "+92 232 534 234",
    email: "priyeshpoptani@gmail.com",
    website: "www.satvasolutions.com",
    address: "715 Mataram City New York"
  }

  const skillsinfo = {
    skill1: "Photoshop",
    skill2: "Illustrator",
    skill3: "Indesign",
    skill4: "Adobe XD",
    skill5: "Sketch"
  }

  return (
    <div className="App">
      <div className='container'>
        <Header headerfirstname={firstname} headerlastname={lastname} headerprofile={profile}></Header>
        <div className="row">
          <div className='col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4 leftside-text p-0'>
            <div className='px-5 mt-5'>
              <Aboutme></Aboutme>
              <Contacts mycontactsinfo={contactsinfo}></Contacts>
              <Skiils myskillsinfo={skillsinfo}></Skiils>
              <Interest></Interest>
            </div>
          </div>
          <Experience></Experience>
        </div>
      </div>
    </div>
  );
}

export default App;
