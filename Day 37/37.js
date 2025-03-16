import React, { createContext, useContext, useRef, useState } from "react";

// Create a Context
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const buttonRef = useRef(null);

  return (
    <div style={{ padding: "20px", background: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h2>Current Theme: {theme}</h2>
      <button ref={buttonRef} onClick={toggleTheme} style={{ padding: "10px", cursor: "pointer" }}>
        Toggle Theme
      </button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;
