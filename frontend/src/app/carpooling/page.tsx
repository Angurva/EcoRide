"use client"

import CardCarpooling from '@/components/CarpoolingPage/CardCarpooling';
import SearchBar from '@/components/Searchbar';
import { Box, Container, Divider, Grid2 as Grid, Typography, Stack, Slider,Switch } from '@mui/material';
import { useRouter } from 'next/navigation';
//import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';

import React from 'react'

export default function Carpooling() {

    const router = useRouter()

    const carpoolingList = [{
        id:1,
        pseudo:"Tartanpion",
        note:4.5,
        date:"25-11-2024",
        numberSeat:2,
        price:3,
        departHour:"08:00",
        endHour:"08:45",
        ecology:false,
      },
      {
        id:2,
        pseudo:"Gertrude",
        note:4.8,
        date:"28-11-2024",
        numberSeat:2,
        price:4,
        departHour:"08:15",
        endHour:"08:50",
        ecology:true,
      },
      {
        id:3,
        pseudo:"Cunégonde",
        note:4.9,
        date:"28-11-2024",
        numberSeat:2,
        price:5,
        departHour:"09:15",
        endHour:"09:50",
        ecology:true,
        },]

    const maxPrice=[
        {
            value: 0,
            label:'0'
        },
        {
            value: 5,
            label:'5'
        },
        {
            value:10,
            label:'10'
        }
    ]

  return (
    <Box sx={{
       flexGrow:1,
    
    }}>
        <Container maxWidth='xl'sx={{display:'flex', flexDirection:'column',gap:5}}>
           

            <SearchBar/>
            
            <Grid container spacing={2} sx={{}}>
                <Grid size={3} sx={{}}>
                    
                    <Stack sx={{ border:1,borderRadius:2, p:3, gap:3}}>
                        <Typography variant='h5' sx={{ letterSpacing:2,}} >Filtres</Typography>
                        <Divider flexItem></Divider>
                        <Box sx={{gap:2}}>
                            <Typography>Ecology Travel</Typography>
                            <Switch></Switch>
                            <Typography>note</Typography>
                            <Typography>Price</Typography>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={2}
                                step={1}
                                valueLabelDisplay="auto"
                                marks={maxPrice}
                                min={0}
                                max={10}
                                >
                                </Slider>
                            <Typography>Duration</Typography>
                        </Box>
                       
                    </Stack>
                    
                    
                </Grid>
                <Grid size={{ xs:12, md:8}} sx={{ border:0}} component={'article'}>
          
                { carpoolingList.map((carpoolingTrip)=>{
                    return(
                    <CardCarpooling carpoolingTrip={carpoolingTrip} key={carpoolingTrip.id}/>
                )}) }
                </Grid>
                
            </Grid>
        </Container>
        
    </Box>
    
  )
}
