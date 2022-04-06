import React from 'react'
import {IconButton} from "@chakra-ui/react"
import {FaSun, FaMoon} from "react-icons/fa"

import {useColorMode} from "@chakra-ui/react"

function DarkModeToggle() {
    //dark mode function
    const {colorMode, toggleColorMode} = useColorMode()

  return (
    <div>
     <IconButton
      icon={colorMode === "light" ? <FaSun /> : <FaMoon />} 
      isRound="true"
      size="sm"
      onClick={toggleColorMode}
      

     >

     </IconButton>
     
     
    </div>
  )
}

export default DarkModeToggle