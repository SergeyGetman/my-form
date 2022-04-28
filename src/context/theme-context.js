import {createContext} from "react";


export const themes = {
    Light : {
        background : 'red',
        textColor : 'white'
    },
    Dark : {
        background: "black",
        textColor: 'white'
    }
}

export const ThemeContext = createContext(themes.Light)
export const ThemeContextDark = createContext(themes.Dark)