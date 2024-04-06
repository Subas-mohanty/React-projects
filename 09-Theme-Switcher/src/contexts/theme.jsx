import {createContext, useContext} from "react"

// we can pass default values to the context
export const ThemeContext = createContext({
  themeMode : "light",
  darkTheme : ()=>{},
  lightTheme : ()=>{},
});

// exporting the provider from here
export const ThemeProvider = ThemeContext.Provider;

// custom hook
export default function useTheme(){
  return useContext(ThemeContext);
}


