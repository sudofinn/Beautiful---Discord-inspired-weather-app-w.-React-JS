import React from "react"


import {Routes, Route} from "react-router-dom"

import DarkMode from "./components/ui/Darkmode"

import NavBar from "./components/ui/NavBar"

import Berlin from "./components/pages/Berlin"
import Dubai from "./components/pages/Dubai"
import Error from "./components/pages/Error"
import NewYork from "./components/pages/NewYork"
import Sydney from "./components/pages/Sydney"
import Tokyo from "./components/pages/Tokyo"


function App() {

  return (
  <div>
      <nav>
        
        <NavBar />
      </nav>
      
      <Routes>
        <Route path="/berlin" element={<Berlin />} />
        <Route path="/dubai" element={<Dubai />} />
        <Route path="/newyork" element={<NewYork />} />
        <Route path="/sydney" element={<Sydney />} />
        <Route path="/tokyo" element={<Tokyo />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
    
  )
}

export default App