import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiDroplet, FiGrid } from "react-icons/fi";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [fading, setFading] = useState(false);

  const handleToggle = () => {
    setFading(true);

    setTimeout(() => {
      toggleTheme();
      setFading(false);
    }, 200);
    document.documentElement.classList.add("theme-transition");

    setTimeout(() => {
      document.documentElement.classList.remove("theme-transition");
    }, 400);
  };

  const Icon = theme === "dark" ? FiDroplet : FiGrid;

  return (
    <>
      <button
        onClick={handleToggle}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        <Icon className="icon" />
      </button>
    </>
  );
}
