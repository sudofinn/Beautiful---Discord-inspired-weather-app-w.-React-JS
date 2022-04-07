import React from 'react'
import { useState , useEffect} from 'react'
import {Heading, Text, Box, IconButton, Icon} from "@chakra-ui/react"
import {WiDayThunderstorm, WiDayCloudy} from "react-icons/wi"

import axios from "axios"

import {motion} from "framer-motion"

import MainLogic from '../logic/MainLogic'

import classes from "../logic/MainLogic.module.css"



function Berlin() {

   
  const weatherUrl = "https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=10001&distance=25&API_KEY=233C95BB-A17B-4D76-9019-CDD6B336377E"
  // make weather api request
  const [weather, setWeather] = useState(0)

  const [icon, setIcon] = useState(0)

  useEffect(()=> {
    axios.get(weatherUrl).then((response) => {
      setWeather(response.data)
      console.log(response.data)
    })
  }, [])

  
  


  

  if(!weather) return null

  
   //set variables
  const city = `${weather[0].ReportingArea}`
  const temp = `${weather[0].AQI}`
  const iconChange = `${weather[0].Category.Name}`
  console.log(iconChange)
  
  const decide = () => {
    if(iconChange == "Good") {
      setIcon("Good")
    }
    else (
      setIcon("Bad")
    )
  }
  


 
   //calculating day
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`


  }
  

  return (
    

    <div className={classes.whole}>
      <Heading fontSize="5xl" display="flex" alignItems="center" justifyContent="center"
       marginTop="50px" backgroundColor="yellow.500" bgClip="text" 
      >
         {city}
      </Heading>

       <div className={classes.outer}>
         <div className={classes.top}>
           <Heading fontSize="7xl" _hover={{color:"yellow.400"}} >
               {temp}</Heading>

           <Icon as={icon === "Good" ? WiDayThunderstorm : WiDayCloudy } w={16} h={16}
            marginTop="20px" _hover={{color:"yellow.400"}} />
         </div>

         <div className={classes.bottom}>
           <Heading size="md" marginTop="160px"
           _hover={{color:"blue.400"}}>
            {dateBuilder(new Date())}</Heading>


             
         </div>
       </div>
    
    </div>
    
  )
}

export default Berlin

