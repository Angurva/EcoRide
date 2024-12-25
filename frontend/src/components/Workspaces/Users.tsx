"use client"

import { Avatar, Box, Grid2 as Grid, Stack, Typography, Button, Collapse, Divider } from "@mui/material"
import { PiCarProfileThin, PiPlusSquareThin } from "react-icons/pi";
import { useState } from "react";
import Favourites from "./elements/Favourites";
import IdentityUser from "./elements/IdentityUser";
import CarDescription from "./elements/CarDescription";

export default function Users() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
      setOpen(!open);
    }

    const [cars, setCar ] = useState([{
        id:1,
        energy: 'Electric',
        registration:'FT-465-PL',
        model:'zoe',
        mark:'renault',
        color: 'blue anthracite',
        registrationFirstDate:'12/10/2021',
        seatAvailable:2,

    },
    {
        id:2,
        energy: 'Diesel',
        registration:'AJ-352-MX',
        model:'R18',
        mark:'Renault',
        color: 'Bordeaux',
        registrationFirstDate:'21/05/1990',
        seatAvailable:2,

    },])

   

  return (
    (
        <>
        <Grid container spacing={2} sx={{ p:2,}}>
          <Grid size={6}>
            <IdentityUser/>
          </Grid>
              
          <Grid size={4}>
          <Box sx={{display:'flex', alignItems:'center', gap:2}}>
            <Typography variant='h6' sx={{my:2}}>Mes véhicules</Typography>
            <PiPlusSquareThin size={24}/>
        </Box>
            {cars.map((car)=>{
              return(
                <CarDescription car={car} key={car.id}/>
              )
            })}
             
          </Grid>        
        </Grid>
        <Divider flexItem sx={{ my:2,}}></Divider>
        
        <Typography variant='h6' sx={{m:2}}>Mes Préfèrences</Typography>       
        <Favourites/>
    
        
        </>
    )
  )
}
