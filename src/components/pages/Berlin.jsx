
import React from 'react'
import { useState , useEffect} from 'react'
import {Heading, Text, Box, IconButton, Icon} from "@chakra-ui/react"
import {WiDayThunderstorm, WiDayCloudy} from "react-icons/wi"

import axios from "axios"

import {motion} from "framer-motion"

import PrimaryLogic from "../logic/MainLogic"

import classes from "../logic/MainLogic.module.css"

//new york

function Berlin() {
  
  

  return (
    <PrimaryLogic zip="10001" whole="yellow.500"
    top="yellow.400" topicon="yellow.400" bottom="blue.400"/>

   
    
  )
}

export default Berlin