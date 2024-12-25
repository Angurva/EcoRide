"use client"

import { Box, Button, Collapse, Stack, Typography,  } from '@mui/material';
import { PiCarProfileThin } from "react-icons/pi";
import React, { useRef, useState } from 'react';

export default function CarDescription({car}:{car:any}) {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
      setOpen(!open);
    }

    const colorSwitch = () => {
      switch(car.energy) {
        case 'Electric':
          return '#ecf6fa';
        case 'Diesel' :
          return '#ffeecf';
        case 'Ethanol' :
          return '#ff7a7a';
        case 'Essence':
          return '#ecf6fa'
      }
    }
  


  return (

    <Box sx={{width:'100%',  my:2, borderRadius:2}}>
      <Button size='small' sx={{width:'100%', display:'flex', bgcolor: colorSwitch,justifyContent:'space-between',px:2, color:'#000', borderBottomRightRadius:0, borderBottomLeftRadius:0}} onClick={handleClick}>
        <Box sx={{display:'flex', alignItems:'center', }}>
          <PiCarProfileThin size={32} />
          <Typography sx={{ textTransform:'capitalize', mx:2,fontSize:'0.9rem' }}>{car.model}, {car.mark}</Typography>
        </Box>
        <Typography sx={{fontSize:'0.9rem' }}>{car.registration}</Typography>
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
      <Stack sx={{p:2}}>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography sx={{ fontSize:'0.9rem'}}>Color: {car.color}</Typography>
          <Typography sx={{ fontSize:'0.9rem'}}>Registration 1er date: {car.registrationFirstDate}</Typography>
        </Box>
        
        <Typography sx={{ fontSize:'0.9rem'}}>Seat Available: {car.seatAvailable}</Typography>
        <Typography sx={{ fontSize:'0.9rem'}}>Energy: {car.energy}</Typography>
      </Stack>
        
      </Collapse>
    </Box>
     
     
  )
}
