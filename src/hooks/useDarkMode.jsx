import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Retrieve dark mode preference from localStorage (or default to false)
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Apply the background color and text color based on darkMode
    const body = document.body;
    body.style.backgroundColor = darkMode ? '#1a202c' : '#ffffff';
    body.style.color = darkMode ? '#ffffff' : '#333333';

    // Save the dark mode state to localStorage for persistence
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
