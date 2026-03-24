"use client"
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // "light" or "dark"

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(theme === "dark" ? "dark" : "light");
      console.log("[ThemeProvider] Set html class to:", document.documentElement.className);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
