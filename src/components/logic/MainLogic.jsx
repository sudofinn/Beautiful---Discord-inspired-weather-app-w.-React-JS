import React from 'react'

import {useState, useEffect} from "react"
import axios from "axios"

import classes from "./MainLogic.module.css"

import {Box} from "@chakra-ui/react"

function MainLogic() {
   

    

   

    //const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${lon}}&appid={${key}}`
    //maybe wait couple hours 

    const weatherApi = "https://api.openweathermap.org/data/2.5/weather?lat={52}&lon={13}&appid={	5dfad5e7e5366fba0e5d}"
    
    const [weather, setWeather] = useState(0)
    
    useEffect(( )=> {
        axios.get(weatherApi).then((response ) => {
            console.log(response.data)
            setWeather(response.data)
        })
    }, [])

    if(!weather) return null


    


  return (
    <Box bg="tomato" w="80%" p={4} color="white">
      This is the box
    </Box>
  )

}


export default MainLogic


/*<div className={classes.outer}>
<div className={classes.top}></div> 

<div className={classes.bottom}></div>
</div> 

*/