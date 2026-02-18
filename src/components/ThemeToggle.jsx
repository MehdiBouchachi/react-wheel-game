import { useTheme } from "../context/ThemeContext";
import { FiDroplet, FiGrid } from "react-icons/fi";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const Icon = theme === "dark" ? FiDroplet : FiGrid;

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label="Toggle theme"
    >
      <Icon className="icon" />
    </button>
  );
}
