import React, { useState } from "react";
import "./DarkMode.css";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setIsDarkMode(true);
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setIsDarkMode(false);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
  };

  return (
    <div className="dark_mode">
      <button id="modeButton" className={`dark_mode_button ${isDarkMode ? 'dark btn' : 'btn'}`} onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkMode;
