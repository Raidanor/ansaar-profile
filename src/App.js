import './App.css';

import ReactModal from 'react-modal';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import React, {useState} from 'react';

import Layout from './pages/Layout.js';
import Resume from './pages/Resume.js';
import Contact from './pages/Contact.js';
import RightBar from './pages/RightBar.js';



function App() {

  return (

    <Router>
    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
            <div class="container">
                <a class="navbar-brand text-white">Ansaar Khadaroo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><a class="nav-link"><Link to="/">Home</Link></a></li>
                        <li class="nav-item"><a class="nav-link"><ResumeTab /></a></li>
                        <li class="nav-item"><a class="nav-link"><Link to="/Contact">Contact</Link></a></li>
                        <li class="nav-item"><a class="nav-link" href = "https://raidanor.itch.io/shoot">Game</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
                <Route exact path="/" element={<Layout />} />
                <Route exact path="/Contact" element={<Contact />} />
                
        </Routes>
    </div>
    </Router>
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


export default App;
