import React, { useState }from "react";
import { Routes, Route } from 'react-router-dom';
import About from "../../views/About";
import Home from "../../views/Home"; 
import Portfolio from "../../views/Portfolio"
import './Content.css';

const Content = () => {
    return (
        <main className="content">
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/portfolio" exact element={<Portfolio />} />
            </Routes>

            <footer>
                <p>Criado por <span>Filipe Araujo</span></p>
                <p>&copy; 2022</p>
            </footer>
        </main>
    )
}

export default Content;