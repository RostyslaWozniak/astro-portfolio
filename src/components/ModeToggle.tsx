import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type TThemes = "light" | "dark" | "system";
const themes: TThemes[] = ["light", "dark", "system"];

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<TThemes>("dark");
  const hadleChangeTheme = (theme: TThemes) => {
    localStorage.setItem("theme", theme);
    setThemeState(theme);
  };

  React.useEffect(() => {
    // const isDarkMode = document.documentElement.classList.contains("dark");
    const activeTheme = localStorage.getItem("theme") || "system";
    setThemeState(activeTheme as TThemes);
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {themes.map((themeName) => (
          <DropdownMenuItem
            key={themeName}
            onClick={() => hadleChangeTheme(themeName)}
            className={cn({ border: themeName === theme })}
          >
            {themeName}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
