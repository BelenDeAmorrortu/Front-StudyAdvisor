import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ThemeContext = React.createContext()

export function useTheme() {
    return useContext(ThemeContext)
}


export function ThemeProvider({ children }) {

    const [currentTheme, setCurrentTheme] = useState('dark')

    useEffect(()=>{

        document.body.classList.add(currentTheme)

    }, [currentTheme])

    function switchTheme(){

        document.body.classList.remove(currentTheme)
        currentTheme === 'dark' ? setCurrentTheme('light') : setCurrentTheme('dark')
    
    }

    let value = {
        currentTheme,
        switchTheme
    }


    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}