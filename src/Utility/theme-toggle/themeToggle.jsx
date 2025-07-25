import { useTheme } from "./themeUtil";
import { FiSun, FiMoon } from "react-icons/fi";

/**
 * A button that will switch between light/dark mode when clicked
 * @returns (React.ReactElement) Theme toggle button
 */
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <FiMoon className="theme-icon" />
      ) : (
        <FiSun className="theme-icon" />
      )}
    </button>
  );
}
