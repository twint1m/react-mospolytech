import { useState } from "react";

export const useCurrentTheme = () => {
  const [currentTheme, setCurrentTheme] = useState<"dark" | "light">("light");
  return { currentTheme, setCurrentTheme };
};
