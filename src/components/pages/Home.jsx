import React from 'react'
import {Heading} from "@chakra-ui/react"

function Home() {
  return (
      <Heading fontSize="5xl" display="flex" alignItems="center"justifyContent="center" marginTop="50px"
      bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip="text"
      >Speed up your weather </Heading>
  )
}

export default Home

// will be accessible through the dropdown