"use client"

import { Grid2 as Grid, Stack, Box, Avatar, Typography,Rating, Tooltip, Stepper,Step, StepLabel,  Card, Chip } from '@mui/material'
import { PiClockLight, PiClockCountdownLight, PiSeatbeltLight, PiClockCounterClockwiseThin, PiCoinsThin } from "react-icons/pi";
import React, { useState } from 'react'
import Link from 'next/link';
import sxCompose from 'mui-sx';
import { blueGrey, grey, lightBlue, blue, teal, cyan, yellow, amber,lime } from '@mui/material/colors';

export default function CardCarpooling({carpoolingTrip}:{carpoolingTrip:any}) {

    const [carpooling, setCarpooling] = useState(carpoolingTrip)

    const colorSuccess = {
        color: 'success'
    }
    const colorGrey = {
        color: 'grey'
    }
    const sxChip = {
        width:'auto',
        justifySelf:'end',
    }
  
  return (
    <Card sx={{mb:2}}>
        <Link href={`/carpooling/${carpooling.id} `}>
        <Grid 
            container spacing={1} 
            sx={(carpooling.id%2) 
                ? { bgcolor:blueGrey[50], '&:hover': {bgcolor:blueGrey[100], transition:"ease-in-out 0.5s"}} 
                : { bgcolor:grey[50], '&:hover':{bgcolor:grey[300], transition:"ease-in-out 0.5s"}} }>
            <Grid size={3} sx={{}}>
                <Stack justifyContent={'center'} alignItems='start' sx={{}}>
                    
                    <Box sx={{ display:'flex', gap:2, mx:2,my:1, alignItems:'center'}}>
                        <Avatar sx={{width:42,height:42}}>PN</Avatar>
                        <Box sx={{display:'flex',flexDirection:'column', alignItems:'start'}}>
                            <Typography sx={{fontSize:'0.9rem', mx:0.7}}>{carpooling.pseudo}</Typography>
                            <Tooltip title={carpooling.note} placement='right-end'>
                                <span>
                                    <Rating max={5} size='small' readOnly value={carpooling.note} precision={0.1}></Rating> 
                                </span>
                            </Tooltip>
                        </Box>
                    </Box>
                    
                    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',my:1,mx:2,gap:5}}>
                        <Chip 
                            label="ecologic" 
                            
                            size="small" 
                            sx={sxCompose( 
                                sxChip,
                                {
                                    condition: carpooling.ecology,
                                    sx: colorSuccess
                                },
                                {
                                    condition: !carpooling.ecology,
                                    sx: colorGrey
                                },
                                )}
                            
                            ></Chip>
                       <Box display={'flex'} alignItems={'center'}>
                         <Tooltip title="Nombre de place(s) restante(s)" placement="top">
                            <span>
                                <PiSeatbeltLight size={24}/> 
                            </span>
                        </Tooltip>
                        <Typography sx={{fontSize:'1.1rem'}}>: {carpooling.numberSeat}</Typography>
                       </Box>
                    </Box>
                </Stack>      
            </Grid>
            <Grid size={7} sx={{ pt:2 }}>
                <Box sx={{display:'flex', gap:1, justifyContent:'center'}}>
                    <Tooltip title="Duration">
                        <span>
                            <PiClockCounterClockwiseThin size={22}/>
                        </span>
                    </Tooltip>
                    <Typography sx={{ fontSize:'0.9rem'}}>45"</Typography>
                </Box>

                <Stepper sx={{mx:2}}>
                    <Step active>
                        <StepLabel icon={<PiClockLight size={22}/>}>{carpooling.departHour}</StepLabel>
                    </Step>

                    <Step active>
                        <StepLabel icon={<PiClockCountdownLight size={22}/>}>{carpooling.endHour}</StepLabel>
                    </Step>
                </Stepper>
            </Grid>
            <Grid size={2} sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>    
                <Box sx={{display:'flex', alignItems:'center', mb:1}}>
                    <Typography sx={{mx:1,fontSize:'2.2rem'}}>{carpooling.price}</Typography>
                    <Tooltip title="crédit(s)" placement='bottom'>
                        <span>
                            <PiCoinsThin size={32}/> 
                        </span>
                    </Tooltip>
                </Box>
            </Grid>
        </Grid> 
        </Link>   
    </Card>
  )
}
