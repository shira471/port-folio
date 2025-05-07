import React, { useState } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('Home');

  const renderPage = () => {
    switch (activePage) {
      case 'Home':
        return <Home />;
      case 'About':
        return <About />;
      case 'Projects':
        console.log(Projects);
        return <Projects />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  };

  return (
    <div className='container'>
      <nav className='navbar'>
        <button onClick={() => setActivePage('Home')}>Home</button>
        <button onClick={() => setActivePage('About')}>About</button>
        <button onClick={() => setActivePage('Projects')}>Projects</button>
        <button onClick={() => setActivePage('Contact')}>Contact</button>
      </nav>
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
