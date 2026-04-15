"use client";

import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Function to update theme based on system preference
    const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
      const theme = e.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", theme);
    };

    // Check for system preference
    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Set initial theme
    updateTheme(darkModeQuery);

    // Listen for changes in system preference
    darkModeQuery.addEventListener("change", updateTheme);

    // Cleanup
    return () => darkModeQuery.removeEventListener("change", updateTheme);
  }, []);

  return <>{children}</>;
}
