import { createContext, useContext } from "react";


export const ThemeContext=createContext({
    // Functionalities
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider=ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}