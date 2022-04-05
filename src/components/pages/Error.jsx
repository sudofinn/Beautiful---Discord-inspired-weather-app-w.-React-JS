import React from 'react'
import {Heading} from "@chakra-ui/react"


function Error() {
  return (
      <Heading fontSize="5xl" display="flex" alignItems="center" justifyContent="center"
       marginTop="20px" backgroundColor="red.500" bgClip="text" 
      >Oops , no weather here</Heading>
    
  )
}

export default Error