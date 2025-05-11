import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "Dark";
  });

  const isDark = theme === "Dark";

  const applyTheme = (newTheme) => {
    if (newTheme === "Dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  const toggleTheme = () => {
    const newTheme = isDark ? "Light" : "Dark";
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  useEffect(() => {
    applyTheme(theme);
  }, []);

  return (
    <div className="flex">
      <button
        onClick={toggleTheme}
        className={`w-12 h-6 rounded-full hidden cursor-pointer sm:flex p-1 transition-colors duration-300 ${
          isDark ? "bg-[#141414]" : "bg-[#CCC]"
        }`}
      >
        <div
          className={`h-4 w-4 rounded-full  shadow-md transform transition-transform duration-300 ${
            isDark ? "translate-x-6 bg-[#222]" : "translate-x-0 bg-[#FFF]"
          }`}
        ></div>
      </button>

      <button
        onClick={toggleTheme}
        className={`transition-colors flex flex-col justify-center items-center p-2 sm:hidden cursor-pointer duration-300`}
      >
        <div>
          {isDark ? (
            <MdDarkMode size={24} className="" />
          ) : (
            <MdLightMode size={24} />
          )}
        </div>
        <div className="text-xs">{isDark ?  "Dark" : "Light"}</div>
      </button>
    </div>
  );
};

export default ThemeToggle;
