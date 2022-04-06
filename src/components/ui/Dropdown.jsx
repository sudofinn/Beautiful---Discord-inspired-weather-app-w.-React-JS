import React from 'react'
import {Link} from "react-router-dom"


import DarkModeToggle from "./DarkModeToggle"
import SettingsModalOverlay from './SettingsModalOverlay'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Button,
} from '@chakra-ui/react'


import {motion} from "framer-motion"



function Dropdown() {
  const MotionMenuButton = motion(MenuButton)
  const MotionMenuItem =  motion(MenuItem)

  return (
    


    <Menu  >

      <MotionMenuButton as={Button} 
       float="right" marginTop="40px" marginRight="30px"
       whileHover= {{scale:1.2}}
       >
        Actions
      </MotionMenuButton>


      <MenuList >
        
        <MotionMenuItem
        whileHover={{scale:0.97}} 
        >
        <Link to="/"> Home Page </Link>
        </MotionMenuItem>

        <MotionMenuItem
          whileHover={{scale:0.97}}
        >
        <DarkModeToggle />

        </MotionMenuItem>

        <MenuDivider></MenuDivider>

        <MotionMenuItem 
         whileHover={{scale:0.97}} 
        >
          <SettingsModalOverlay />
         
        </MotionMenuItem>
      
        

        
      

      </MenuList>

    </Menu>
  )
  

  

}

export default Dropdown