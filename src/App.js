import React from 'react'
import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className='app_container'>
      <div className='content_container'>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App