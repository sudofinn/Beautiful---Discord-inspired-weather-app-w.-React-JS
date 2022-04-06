import React from 'react'

import classes from "./Home.module.css"
import {Heading, HStack, IconButton, useToast, Button} from "@chakra-ui/react"

import {FcAutomatic,FcCamera,FcChargeBattery,  FcBarChart,  FcAbout, FcCloseUpMode } from "react-icons/fc"

import {motion} from "framer-motion"



function Home() {
    //framer motion w. chakra ui
    const MotionIconButton = motion(IconButton)
    const MotionButton = motion(Button)

    //using toasts
    const toast = useToast()



  return (
      <div >
      <Heading fontSize="5xl" display="flex" alignItems="center"justifyContent="center" marginTop="50px"
      bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip="text"
      >Speed up your weather </Heading>

      <HStack display="flex" alignText="center" justifyContent="center" margin="50px" >

           <MotionIconButton icon={<FcAutomatic />} fontSize="2xl" whileHover={{scale:1.2}} marginRight="4px"
           onClick={() => {
               toast ({
                title: 'Your settings are good to go.',
                description: "Keep exporing!",
                status: 'success',
                duration: 2000,
                isClosable: true,
               })
           }} />

           <MotionIconButton icon={<FcCamera />}  fontSize="2xl" whileHover={{scale:1.2}} marginLeft="4px" marginRight="4px"
           onClick={() => {
               toast ({
                title: 'Checking connection.',
                description: "You are good to go !",
                status: 'info',
                duration: 2000,
                isClosable: true,
               })
            }} />
           <MotionIconButton icon={<FcChargeBattery/> }  fontSize="2xl"whileHover={{scale:1.2}} marginLeft="4px" marginRight="4px"
              onClick={() => {
                toast ({
                 title: 'There are only a few free updates.',
                 description: "Lets get them !",
                 status: 'info',
                 duration: 2000,
                 isClosable: true,
                })
            }} />
           <MotionIconButton icon={<FcBarChart />} fontSize="2xl" whileHover={{scale:1.2}} marginLeft="6px" marginRight="4px"
           onClick={() => {
            toast ({
             title: 'How often you do what.',
             description: "Lets analyse some graphs !",
             status: 'success',
             duration: 2000,
             isClosable: true,
            })
        }} />
           <MotionIconButton icon={<FcAbout />} fontSize="2xl" whileHover={{scale:1.2}}  marginLeft="4px" marginRight="4px"
           onClick={() => {
            toast ({
             title: 'Did you know these ? .',
             description: "Learn some fun facts !",
             status: 'info',
             duration: 2000,
             isClosable: true,
            })
        }} />
           <MotionIconButton icon={<FcCloseUpMode />} fontSize="2xl" whileHover={{scale:1.2}} marginLeft="4px" marginRight="4px"
            onClick={() => {
                toast ({
                 title: 'it is your turn ',
                 description: "Give some feedback at github.com/sudofinn !",
                 status: 'info',
                 duration: 2000,
                 isClosable: true,
                })
            }} />
       </HStack>


       <MotionButton  size="lg"display="flex" alignItems="center" justifyContent="center" 
        textAlign="center" marginLeft="520px" marginTop="100px" colorScheme="twitter"
        whileHover={{scale:0.8}}
      onClick={() =>
        toast({
          title: 'Searching for weather.',
          description: "All set up, time to search some!",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })

      }
      
    >
      Start now !
    </MotionButton>

     

      </div>
  )
}

export default Home

// will be accessible through the dropdown
//fix marginLeft ( won ´t go responsive maxW must try)