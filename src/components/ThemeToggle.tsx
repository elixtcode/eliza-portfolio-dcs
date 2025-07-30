import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(() =>
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;
