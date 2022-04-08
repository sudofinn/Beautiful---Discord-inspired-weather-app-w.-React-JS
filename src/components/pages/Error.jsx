import React from 'react'

import {Heading, Button} from "@chakra-ui/react"
import {motion} from "framer-motion"


function Error() {

  return (
    <div>
      <Heading fontSize="5xl" display="flex" alignItems="center" justifyContent="center"
       marginTop="50px" backgroundColor="red.500" bgClip="text" 
      >Oops , no weather here</Heading>

      

    </div>
    
  )
}

export default Error