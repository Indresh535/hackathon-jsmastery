"use client"
import React, {createContext, useContext, useState} from "react";

const StoreStateContext = createContext()


const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
  };
  
  
  export const ContextProvider = ({children}) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03c9d7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setModeFunc = (e) => {
      setCurrentMode(e.target.value)
      localStorage.setItem('themeMode', e.target.value)
      //console.log('theme', e.target.value)
      //setThemeSettings(false)
    }

    const setColorFunc = (color) => {
      setCurrentColor(color)
      localStorage.setItem('colorMode', color)
      //setThemeSettings(false)
    }
    

    const handleClick = (clicked) => {
      setIsClicked({...initialState, [clicked]:true})
    }

    return (
        <StoreStateContext.Provider 
        value={{activeMenu: activeMenu, 
          setActiveMenu: setActiveMenu,
          isClicked:isClicked,
          setIsClicked:setIsClicked,
          handleClick,
          screenSize,
          setScreenSize,        
          currentColor,
          currentMode,
          setCurrentColor, setCurrentMode,
          setColorFunc,  
          setModeFunc,  
          themeSettings, setThemeSettings,
          isLoggedIn, setIsLoggedIn  
        }}
        >
                {children}
        </StoreStateContext.Provider>
    )
  }

export const useStateContext = () => useContext(StoreStateContext)