import './App.css';

import ReactModal from 'react-modal';

import React, {useState} from 'react';

import Layout from './pages/Layout.js';
import Resume from './pages/Resume.js';
import Contact from './pages/Contact.js';
import RightBar from './pages/RightBar.js';
import RightBar2 from './pages/RightBar2.js';



function App() {

  return (
    <div className="App h-100">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
            <div class="container">
                <a class="navbar-brand text-white">Ansaar Khadaroo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link"><ResumeTab /></a></li>
                        <li class="nav-item"><a class="nav-link"><ContactTab /></a></li>
                        <li class="nav-item"><a class="nav-link" href = "https://raidanor.itch.io/shoot"><u>Game</u></a></li>
                    </ul>
                </div>
            </div>
        </nav>
      <div class = "container-fluid transparent h-100">
        <div class = "row h-100">
          <div class="col-10 maintext flex-fill h-100">
            <div class = "h-100">
              <Layout />
            </div>
          </div>
          <div  class="col-2 flex-fill vh-100">
            <div class="h-100">
              <div class="row rightbarbg">
                <div class="col">
                  <RightBar />
                </div>
              </div>
              <div class="row rightbarbg2">
                <div class="col" >
                  <RightBar2 />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

function ResumeTab()
{
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Resume</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <Resume />
      </ReactModal>
    </div>
  );
};


function ProtoContact()
{
  const [flagContact, setFlagContact] = useState(true);
  return(
    <>
      <a onClick = {() => setFlagContact(!flagContact)}>ToggleContact</a>
      <RenderContact flag = {flagContact}/>
    </>
  )
};

function RenderContact(props)
{
  if (props.flag === false)
  {
    return(<Contact />)
  }
};

function ContactTab()
{
  const [isOpen, setIsOpen] = useState(false);
 
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Contact</button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <Contact/>
      </ReactModal>
    </div>
  );
};


export default App;
