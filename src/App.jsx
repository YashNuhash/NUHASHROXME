import React from 'react';
import Navbar from './Navbar';
import './CSS Files/App.css';
import About from './About';
import Contact from './Contact';





function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Contact/>
    </div>
  );
}

export default App;