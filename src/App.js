import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className='app_container'>
      <div className='content_container'>
        <NavBar />
        <Home />
      </div>
    </div>
  )
}

export default App