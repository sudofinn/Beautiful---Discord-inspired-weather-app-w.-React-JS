import React from 'react'
import {Heading} from "@chakra-ui/react"

import PrimaryLogic from "../logic/MainLogic"

//houston


function Sydney() {
  return (
    <div>
     

      <PrimaryLogic zip="77001"whole="gray.500"
    top="red.400" topicon="gray.400" bottom="red.400"  />

      </div>
    
  )
}

export default Sydney

/*
<Heading fontSize="5xl" display="flex" alignItems="center" justifyContent="center"
marginTop="50px" backgroundColor="green.700" bgClip="text" 
>The weather in Sydney</Heading>
*/