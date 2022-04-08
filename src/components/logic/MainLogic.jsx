import React from 'react'

import { useState , useEffect} from 'react'
import {Heading, Icon} from "@chakra-ui/react"
import {WiDayThunderstorm, WiDayCloudy} from "react-icons/wi"

import axios from "axios"




import classes from "../logic/MainLogic.module.css"



function PrimaryLogic(props) {
  const zip = props.zip
   
  const weatherUrl = `air now api`
  

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
      <Heading  display="flex" alignItems="center" justifyContent="center"
       marginTop="50px" backgroundColor={props.whole} bgClip="text"
       fontSize={{ base: '40px', md: '50px', lg: '56px' }} 
      >
         {city}
      </Heading>

       <div className={classes.outer}>
         <div className={classes.top}>
           <Heading  _hover={{color:`${props.top}`}}
            fontSize={{ base: '50px', md: '50px', lg: '70px' }} >
               {temp}</Heading>

           <Icon as={icon === "Good" ? WiDayThunderstorm : WiDayCloudy } w={16} h={16}
            marginTop="20px" _hover={{color:`${props.topicon}`}} />
         </div>

         <div className={classes.bottom}>
           <Heading size="md" marginTop="160px"
           _hover={{color:`${props.bottom}`}}>
            {dateBuilder(new Date())}</Heading>


             
         </div>
       </div>
    
    </div>
    
  )
}

export default PrimaryLogic