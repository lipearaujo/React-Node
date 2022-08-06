import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const links = [
    {
        name: 'Home',
        to: "/",
        active: "active-link"
    },
    {
        name: 'About',
        to: "/about",
        active: "about-link"
    },
    {
        name: 'Portfolio',
        to: "/portfolio",
        active: "portfolio-link"
    }
];

const Navbar = (props) => {
    return (
        <header className="navbar-header">
            <nav className="navbar-nav">
                <ul>
                    {links.map((link) => (
                        <li>
                            <NavLink to={link.to} className={props.linkMode}>{link.name}</NavLink>
                        </li>
                    ))}

                    <li>
                        <div className={props.slider}  onClick={ props.toggleTheme }>
                            <div className={props.circleSlider}></div>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;