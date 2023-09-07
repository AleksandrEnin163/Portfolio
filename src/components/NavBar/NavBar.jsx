import React from 'react'
import s from './NavBar.module.css'

function NavBar() {
  return (
    <header className={s.header}>
        <h3 className={s.logo}><a href='#home'>Aleksandr Enin</a></h3>
        <nav>
            <ul>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar