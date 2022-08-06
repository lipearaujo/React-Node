import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Content from "./components/layout/Content";

import './App.css';

const App = () => {
    const [darkMode, setDarkMode] = useState('light-mode');
    const [slider, setSlider] = useState('changeTheme');
    const [circleSlider, setCircleSlider] = useState('circle');
    const [linkMode, setLinkMode] = useState('link')

    const toggleTheme = () => {        
        if(darkMode === 'light-mode') {
            setDarkMode("dark-mode"); 
            setSlider("changeTheme-active")
            setCircleSlider("circle-active")
            setLinkMode("link-dark-mode")
        }else {
            setDarkMode("light-mode");
            setSlider("changeTheme")
            setCircleSlider("circle")
            setLinkMode("link")
        }
    }

    return (
        <div className={darkMode}>
            <BrowserRouter>
                <Navbar darkMode={ darkMode } toggleTheme={ toggleTheme } slider={ slider } circleSlider={ circleSlider } linkMode={ linkMode }/>
                <Content />
            </BrowserRouter>
        </div>  
    )
}

export default App;