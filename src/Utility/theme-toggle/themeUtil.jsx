import { createContext, useContext, useState, useEffect } from "react";

/**
 *  Manages the themes throughout the app
 */
const ThemeContext = createContext();

/**
 * A wrapper that provides the theme to all the components inside it
 * @param {object} component props
 * @returns (React.ReactElement) <ThemeContext.Provider>
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * it gets the current theme and toggle function
 * @returns The theme and the toggleTheme function
 */
export const useTheme = () => useContext(ThemeContext);
