import { createContext } from "react";

export enum Theme {
  LIGHT = "app--light",
  DARK = "app--dark"
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const ThemeProvider = ThemeContext.Provider;

export const LOCAL_STORAGE_THEME_KEY = "e-tutor-theme";