import './App.css';

import ReactModal from 'react-modal';

import React, {useState} from 'react';

import Layout from './pages/Layout.js';
import Resume from './pages/Resume.js';
import Contact from './pages/Contact.js';

function App() {

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
            <div class="container">
                <a class="navbar-brand" href="#!">Ansaar Khadaroo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link"><ResumeTab /></a></li>
                        <li class="nav-item"><a class="nav-link"><ContactTab /></a></li>
                        <li class="nav-item"><a class="nav-link" href = "https://raidanor.itch.io/shoot">Game</a></li>
                    </ul>
                </div>
            </div>
        </nav>
      <Layout />
      <br />
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
