"use client"
import React, {createContext, useContext, useState} from "react";

const StoreJwtAuthContext = createContext()

export const JwtAuthContextProvider = ({children}) => {

    const [jwtAuth, setJwtAuth] = useState({});

  return (
    <StoreJwtAuthContext.Provider 
        value={{
          jwtAuth, 
          setJwtAuth, }}
    >
            {children}
    </StoreJwtAuthContext.Provider>
  )
}

export const useJwtStateContext = () => useContext(StoreJwtAuthContext)
