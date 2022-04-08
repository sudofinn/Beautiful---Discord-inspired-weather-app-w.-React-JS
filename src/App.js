import React from "react"


import {Routes, Route} from "react-router-dom"


import NavBar from "./components/ui/NavBar"
import Dropdown from "./components/ui/Dropdown"


import Home from "./components/pages/Home"

import NewYork from "./components/pages/NewYork"
import LosAngeles from "./components/pages/LosAngeles"
import Chicago from "./components/pages/Chicago"
import Houston from "./components/pages/Houston"
import Phoenix from "./components/pages/Phoenix"

import Error from "./components/pages/Error"



function App() {

  return (
  <div>
      <nav>
        
        <Dropdown /> 
        <NavBar />
        
        
        
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-york" element={<NewYork />} />
        <Route path="/los-angeles" element={<LosAngeles />} />
        <Route path="/chicago" element={<Chicago />} />
        <Route path="/houston" element={<Houston />} />
        <Route path="/phoenix" element={<Phoenix />} />
        <Route path="*" element={<Error />} />
      </Routes>

    </div>
    
  )
}

export default App
