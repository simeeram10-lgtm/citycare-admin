
"use client"
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Always default to light mode on first load
  const [theme, setTheme] = useState(() => "light");

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  // Use layout effect to guarantee class is set before paint
  React.useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      document.documentElement.style.colorScheme = theme === "dark" ? "dark" : "light";
      console.log("[ThemeProvider] Set html class to:", document.documentElement.className, "color-scheme:", document.documentElement.style.colorScheme);
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
