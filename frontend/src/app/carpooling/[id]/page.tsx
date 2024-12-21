"use client"

import { Box, Container, Divider, Grid2 as Grid, Typography, Button, Paper } from '@mui/material'


import React, { useState } from 'react'
import Driver from '@/components/DetailsCarpooling/Driver';
import Travel from '@/components/DetailsCarpooling/Travel';
import Options from '@/components/DetailsCarpooling/Options';
import Favourites from '@/components/DetailsCarpooling/Favourites';

export default function DetailsCarpooling({params}) {

    const [carpooling, setCarpooling] = useState({
        pseudo:'Tartanpion',
        ecology:false,
        note:4.6,
        timelapse:45,
        price:4,
        smoker:false,
        animal:true,
    })
  return (
    <Box 
        component={'main'} 
        sx={{
            flexGrow:1,
            p:3,
        }}>
        <Container maxWidth="lg">
            <Typography variant={'h4'} sx={{mb:3}}>Vendredi, 29 Novembre 2024</Typography>
            <Grid container component={'section'} spacing={2}>
                <Grid component={'aside'} size={{xs:12, lg:4 }} sx={{ display:{xs:'flex',lg:'none'}, flexDirection:'column'}}>
                    <Driver carpooling={carpooling}/>
                </Grid>
                <Grid 
                    component={'article'} 
                    size={{ xs:12, lg:8 }} 
                    sx={{
                        display:'flex', 
                        flexDirection:'column',
                        height:'auto'
                    }}>
                    <Travel carpooling={carpooling} />
                    <Paper elevation={1} sx={{ width:'100%', py:2, px:4, my:2, bgcolor:"#fafafa"}}>
                        <Grid container>
                            <Grid size={5}>
                                <Options carpooling={carpooling}/>   
                            </Grid>
                            <Grid size={2}>
                                <Divider orientation='vertical' flexItem />    
                            </Grid>
                            <Grid size={5}>
                                <Favourites carpooling={carpooling}/>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Grid>
                <Grid component={'aside'} size={{xs:12, lg:4 }} sx={{ display:{xs:'none',lg:'flex'}, flexDirection:'column'}}>
                    <Driver carpooling={carpooling}/>
                    <Button variant='outlined' sx={{my:2}}>Valider la réservation</Button>
                </Grid>
               
            </Grid> 
            <Box sx={{ display: {xs:'flex', lg:'none'}, justifyContent:'center' }}>
                <Button variant='outlined' sx={{my:2}}>Valider la réservation</Button>
            </Box>
        </Container>
    </Box>   
  )
}
