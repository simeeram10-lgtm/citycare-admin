import React from "react";
import { useTheme } from "./ThemeContext";

export default function ThemeToggleButton() {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br from-yellow-300 to-amber-300 hover:from-yellow-400 hover:to-amber-400 transition-all duration-500 flex-shrink-0 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 dark:bg-gradient-to-br dark:from-slate-700 dark:to-slate-900 dark:text-white"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? (
        <span className="text-xl animate-pulse-slow">🌙</span>
      ) : (
        <span className="text-xl animate-spin-slow">☀️</span>
      )}
    </button>
  );
}
