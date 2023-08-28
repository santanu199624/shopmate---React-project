import './Header.css';
import React, { useEffect, useState } from 'react'

const Header = () => {

  const[theme, setTheme] = useState("light")

  useEffect(()=>{
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  }, [theme])

  

  return (
    <header className='header'>
        <div className="logo">
            <h1>TASKMATE</h1>
        </div>
        <div className="theme_selector">
            <span onClick={()=> setTheme("light")} className={theme === "light"? "light activeTheme": "light" }></span>
            <span onClick={()=> setTheme("dark")} className={theme === "dark"? "dark activeTheme ": "dark" }></span>
            <span onClick={()=> setTheme("green")} className={theme === "green"? "green activeTheme": "green"}></span>
            <span onClick={()=> setTheme("blue")}  className={theme === "blue"? "blue activeTheme": "blue"}></span>
            <span onClick={()=> setTheme("yellow")} className={theme === "yellow"? "yellow activeTheme": "yellow" }></span>
            <span onClick={()=> setTheme("gray")} className={theme === "gray"? "gray activeTheme": "gray" }></span>
        </div>
    </header>
  )
}

export default Header
