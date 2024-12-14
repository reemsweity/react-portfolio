import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode'; // Import the custom hook

function App() {
  // Use the custom hook to manage dark mode state
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <Router>
      {/* Apply dark mode classes globally */}
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
        {/* Pass darkMode and setDarkMode to Navbar and Footer */}
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/home" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/skills" element={<Skills darkMode={darkMode} />} />
          <Route path="/project" element={<Project darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
        </Routes>

        {/* Pass darkMode and setDarkMode to Footer */}
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />

        <Toaster />
      </div>
    </Router>
  );
}

export default App;
