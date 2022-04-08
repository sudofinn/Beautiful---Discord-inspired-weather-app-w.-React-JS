import React from 'react'
import {Link} from "react-router-dom"



import {VStack, IconButton} from "@chakra-ui/react"

import {motion} from "framer-motion"


import {AiFillHome, AiFillFire, AiOutlineAliwangwang, AiOutlineHeart, AiTwotoneCrown} from "react-icons/ai"



function NavBar() {
  // framer motion w.chakra ui
  const MotionIconButton = motion(IconButton)



  return (
      
   <div>
     <VStack float="left" marginTop="40px" marginLeft="15px"  spacing="30px" >

      <Link to ="/new-york">
       <MotionIconButton icon={<AiFillHome />} size="lg"  whileHover={{scale:1.5}} />
      </Link>
       

     <Link to ="/los-angeles">
        <MotionIconButton icon={<AiFillFire />} size="lg" whileHover={{scale:1.5}} />
     </Link>


     <Link to ="/chicago">
      <MotionIconButton icon={<AiOutlineAliwangwang />} size="lg" whileHover={{scale:1.5}} />
     </Link>

     <Link to="/houston">
     <MotionIconButton icon={<AiOutlineHeart />} size="lg" whileHover={{scale:1.5}} />
     </Link>

     <Link to="/phoenix">
     <MotionIconButton icon={<AiTwotoneCrown />} size="lg" whileHover={{scale:1.5}} />
     </Link>


     </VStack>
   </div> 

  )
}

export default NavBar

