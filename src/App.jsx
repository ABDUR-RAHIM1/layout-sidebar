import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' 
import About from './Coponents/Pages/About'
import Contact from './Coponents/Pages/Contact'
import Home from './Coponents/Pages/Home'
import More from './Coponents/Pages/More'

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route  path="/"  element={<Home/>} />
         <Route  path="/about"  element={<About/>} />
         <Route  path="/contact"  element={<Contact/>} />
         <Route  path="/more"  element={<More/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App