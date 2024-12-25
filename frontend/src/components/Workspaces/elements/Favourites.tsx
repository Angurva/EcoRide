"use client"

import { Box, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Favourites() {

    const [smoker, setSmoker] = useState(false)

    const handleChange = ()=>{
        setSmoker(!smoker)
    }
    

  return (
    <>
        <Box sx={{display:'flex', ml:2, alignItems:'center'}}>
            <Typography>fumeur</Typography> 
            <Switch checked={smoker} onChange={handleChange} size='medium'sx={{m:1}}></Switch>  
            <Typography>non-fumeur</Typography>
        </Box>
        <Box sx={{display:'flex', ml:2, alignItems:'center'}}>
            <Typography>animaux</Typography> 
            <Switch checked={smoker} onChange={handleChange} size='medium'sx={{m:1}}></Switch>  
            <Typography>non-animaux</Typography>
        </Box>
        
    </>
  )
}
