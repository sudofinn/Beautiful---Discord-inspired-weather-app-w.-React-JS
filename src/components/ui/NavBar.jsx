import React from 'react'
import {Link} from "react-router-dom"

import classes from "./NavBar.module.css"


import {VStack, IconButton} from "@chakra-ui/react"
import { Heading } from '@chakra-ui/react'

import {motion} from "framer-motion"


import {AiFillHome, AiFillFire, AiOutlineAliwangwang, AiOutlineHeart, AiTwotoneCrown} from "react-icons/ai"



function NavBar() {
  // framer motion w.chakra ui
  const MotionIconButton = motion(IconButton)



  return (
      
   <div>
     <VStack float="left" marginTop="40px" marginLeft="15px" className={classes.vstack} spacing="30px" >

      <Link to ="/berlin">
       <MotionIconButton icon={<AiFillHome />} size="lg"  whileHover={{scale:1.5}} />
      </Link>
       

     <Link to ="/dubai">
        <MotionIconButton icon={<AiFillFire />} size="lg" whileHover={{scale:1.5}} />
     </Link>


     <Link to ="/newyork">
      <MotionIconButton icon={<AiOutlineAliwangwang />} size="lg" whileHover={{scale:1.5}} />
     </Link>

     <Link to="/sydney">
     <MotionIconButton icon={<AiOutlineHeart />} size="lg" whileHover={{scale:1.5}} />
     </Link>

     <Link to="/tokyo">
     <MotionIconButton icon={<AiTwotoneCrown />} size="lg" whileHover={{scale:1.5}} />
     </Link>


     </VStack>
   </div> 

  )
}

export default NavBar

