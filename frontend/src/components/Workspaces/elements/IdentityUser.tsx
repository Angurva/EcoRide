'use client'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'


export default function IdentityUser() {
  
  const [ user, setUser ] = useState({})

  return (
    <>
        <Typography variant='h6' sx={{my:2}}>Mes informations personnelles</Typography>
        <Box sx={{display:'flex', alignItems:'center', my:2}}>
            <Avatar sx={{ width:80, height:80, }} >TP</Avatar>
            <Typography variant='h6' sx={{ ml:3 }}>SURNAME TOTO</Typography>
        </Box>

        <Stack sx={{mx:2}} spacing={0.1}> 
            <Typography sx={{fontSize:'0.9rem'}}>Firstname: Tartanpion</Typography>
            <Typography sx={{fontSize:'0.9rem'}}>Lastname: De La Rigotte</Typography>
            <Typography sx={{fontSize:'0.9rem'}}>birth date: 10/12/1983</Typography>
            <Typography sx={{fontSize:'0.9rem'}}>phone: 064-3269856</Typography>
            <Typography sx={{fontSize:'0.9rem'}}>address:&nbsp;69 av., de la turlute 699669, la Vigie</Typography>
        </Stack>
            
    </>
  )
}
