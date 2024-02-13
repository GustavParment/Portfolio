import './App.css'
import React from 'react';
import HomePage from './pages/HomePage.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ContactMe from './pages/ContactMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Header from './pages/Header.jsx';


function App() {
  return (
<div className='app'>
  <Header/>
    <HomePage/>
      <AboutMe/>
    <ContactMe/>
</div>
   
  );
}

export default App;