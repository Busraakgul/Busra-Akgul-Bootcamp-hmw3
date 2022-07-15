import React, { createContext, useState } from 'react';
import './App.css';
import ReactSwitch from "react-switch";

import HomePage from './components/home-page/HomePage';
import { Header } from './components/header';


export const ThemeContext = createContext(null);

function App() {
  
  const [activeTab, setActiveTab] = useState("fn")
  const [theme,setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((current) => (current ==="light"? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
      <div className="App" id={theme}>
      <Header/>
      <HomePage/>
        <span className='switchtheme'>
          <label>{theme ==="light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme ==="dark"}/></span>
        <div className='container'>
          <div className="btn-group tabs" role="group" ariaLabel="label">
            
          </div>
          <br />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}


export function ThemeChanger() {
  const [darkMode,setDarkMode] =useState(false)
  return(
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <div className="container">
        <span style={{color:darkMode ? 'grey' : 'yellow'}}>Light</span>
        <div className="switch-checkbox">
    
    <label className="switch" >
        <input type="checkbox" 
        onChange={() => setDarkMode(!darkMode)}
        />
        <span className="slider round"></span>
    </label>
        </div>
        <span style={{color: darkMode ?  '#c96dfd': 'grey'}}>D</span>
      </div>
      <div>
          <h1>{darkMode ? "Dark" : "Light"} Mode</h1>
      </div>

    </div>
  );
}
export default App



