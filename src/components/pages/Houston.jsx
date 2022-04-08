import React from 'react'
import {Heading} from "@chakra-ui/react"

import PrimaryLogic from "../logic/MainLogic"

//houston


function Houston() {
  return (
    <div>
     

      <PrimaryLogic zip="77001"whole="gray.500"
    top="red.400" topicon="gray.400" bottom="red.400"  />

      </div>
    
  )
}

export default Houston

/*
<Heading fontSize="5xl" display="flex" alignItems="center" justifyContent="center"
marginTop="50px" backgroundColor="green.700" bgClip="text" 
>The weather in Sydney</Heading>
*/