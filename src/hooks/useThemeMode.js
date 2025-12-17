import { useState, useEffect } from "react";

export const useThemeMode = () => {
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [mode, setMode] = useState(
    localStorage.getItem("currentMode") ||
      (systemPrefersDark ? "dark" : "light")
  );

  useEffect(() => {
    localStorage.setItem("currentMode", mode);
  }, [mode]);

  return { mode, setMode };
};
