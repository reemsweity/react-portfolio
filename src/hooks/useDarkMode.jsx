import { useState, useEffect } from "react";

const useDarkMode = () => {
  // Get initial state from localStorage or default to 'false'
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("darkMode")) || false;
    }
    return false;
  });

  // Toggle dark mode and store in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Save to localStorage
      return newMode;
    });
  };

  useEffect(() => {
    // Apply dark mode class to body element on mode change
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
