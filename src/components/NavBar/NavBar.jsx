import s from './NavBar.module.css'
import {useState} from 'react'

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <header className={s.header}>
          <h3 className={s.logo}><a href='#home'>Aleksandr Enin</a></h3>
          <nav>
              <ul>
                  <li><a href='#home'>Home</a></li>
                  <li><a href='#about'>About</a></li>
                  <li><a href='#projects'>Projects</a></li>
                  <li><a href='#contact'>Contact</a></li>
                  <li onClick={() => setIsMenuOpen(true)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={s.mobile_menu}><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg></li>
              </ul>
          </nav>
      </header>
      <div className={`${s.mobile_nav} ${isMenuOpen ? s.open_menu : s.closed_menu}`}>
        <span onClick={() => setIsMenuOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg></span>
        <ul>
          <li onClick={() => setIsMenuOpen(false)}><a href="#home">Home</a></li>
          <li onClick={() => setIsMenuOpen(false)}><a href="#about">About</a></li>
          <li onClick={() => setIsMenuOpen(false)}><a href="#projects">Projects</a></li>
          <li onClick={() => setIsMenuOpen(false)}><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </>
  )
}

export default NavBar