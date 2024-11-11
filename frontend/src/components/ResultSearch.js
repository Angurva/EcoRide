"use client"

import { Grid2 as Grid, Stack, Box, Avatar, Typography,Rating, Tooltip, Stepper,Step, StepLabel } from '@mui/material'
import { PiCertificateLight,PiCalendarDuotone,PiClockLight, PiClockCountdownLight, PiSeatbeltLight  } from "react-icons/pi";
import { LiaFlagCheckeredSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import React, { useState } from 'react'

export default function ResultSearch() {

    const [carpooling, setCarpooling] = useState({
        pseudo:"Tartanpion",
        note:4,
        date:"25-11-2024",
        numberSeat:2,
        price:3.0,
        departHour:"08:00",
        endHour:"08:45",
        ecology:true,
        
    })

  return (
    <Grid container spacing={1} sx={{p:1, bgcolor:'ivory'}}>
        <Grid size={4} sx={{ border:1}}>
            <Box sx={{display:'flex', ml:2 }}>  
                <Avatar sx={{my:2,mr:2, width:56, height:56}}></Avatar>    
                <Stack>
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Typography sx={{ml:1,mt:2}}>{carpooling.pseudo}</Typography>
                        { carpooling.ecology && 
                        <Box sx={{mt:1, justifySelf:'end'}}>
                            
                            <Tooltip title="ecologic">
                                <PiCertificateLight size={28} style={{color:'#07ba4c'}} />
                            </Tooltip>
    
                        </Box>
                      }
                    </Box>
                    
                    <Rating value={4} size='small'></Rating>
                    
                </Stack> 
                    
            </Box>
        </Grid>
        <Grid size={8} sx={{}}>
            
            <Stack sx={{px:3}} >
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'space-between',my:1}}>
                    <Box sx={{display:'flex',mr:2}}>
                        <PiCalendarDuotone size={24} style={{ marginLeft:8}}/>
                        <Typography sx={{alignItems:'center'}}>12/11/2024</Typography>
                    </Box>
                    <Stepper sx={{ flexGrow:1}}>
                        <Step>
                            <StepLabel icon={<PiClockLight size={22}/>}>09:00</StepLabel>
                        </Step>
                        <Step>
                            <StepLabel icon={<PiClockCountdownLight size={22}/>}>10h00</StepLabel>
                        </Step>
                    </Stepper>    
                </Box>
                <Grid container spacing={2} sx={{ml:1}}>
                    <Grid size={3} sx={{display:'flex'}}>
                        <Tooltip title="Nombre de place(s) restante(s)" placement="bottom-start">
                            <PiSeatbeltLight size={22}/>
                        </Tooltip>
                        <Typography>: 3 places</Typography>
                    </Grid>
                     <Grid size={3} sx={{display:'flex'}}>
                        <Tooltip title="Prix en crédit">
                            <GrMoney size={18}/>
                        </Tooltip>
                        <Typography>: 3 crédits</Typography>
                    </Grid>
                    <Grid size={3}offset={3} sx={{ display:'flex', justifyContent:'end', pr:1}}>
                       
                    </Grid>

                </Grid>   
            </Stack>
            
        </Grid>
      

    </Grid>
  )
}
