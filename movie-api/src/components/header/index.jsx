import React from 'react'
import './header.css'
import logo from '../../img/Netflix_Logo.png'

const Header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
        <div className="header__logo">
            <a href="/"><img src={logo} alt="Netflix" /></a>
        </div>
    </header>
  )
}

export default Header