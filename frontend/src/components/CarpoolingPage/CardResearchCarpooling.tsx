"use client"

import { Grid2 as Grid, Stack, Box, Avatar, Typography,Rating, Tooltip, Stepper,Step, StepLabel,  Card, Grow, Button, CardHeader, CardContent, Chip } from '@mui/material'
import { PiCertificateLight,PiCalendarDuotone,PiClockLight, PiClockCountdownLight, PiSeatbeltLight, PiClockCounterClockwiseThin,PiClockCounterClockwise  } from "react-icons/pi";
import { LiaFlagCheckeredSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import { GrMoney } from "react-icons/gr";
import React, { useState } from 'react'
import Link from 'next/link';
import { TbClockCheck } from "react-icons/tb";
import { MdTimelapse } from "react-icons/md";
import { deepOrange, deepPurple } from '@mui/material/colors';

export default function CardResearchCarpooling() {

    const [carpooling, setCarpooling] = useState({
        pseudo:"Tartanpion",
        note:4.5,
        date:"25-11-2024",
        numberSeat:2,
        price:3,
        departHour:"08:00",
        endHour:"08:45",
        ecology:false,
        
    })

  return (
    <>
    
    <Card>
        <Link href="#">
        <Grid container spacing={1}>
            <Grid 
                size={2}
                sx={{}}
            >
                <Avatar 
                    sx={{ 
                        width:72,
                        height:72,
                        m:2
                        }}
                    />
            </Grid>
            <Grid 
                size="grow"
                sx={{}}
            >
                <Typography
                    sx={{
                        mt:3,
                        fontSize:'0.9rem'
                        }}
                >
                    {carpooling.pseudo}
                </Typography>
                <Rating
                    value={4}
                    size='small'
                    readOnly
                />
                
                <Box sx={{
                    justifySelf:'start'
                    }}
                >
                    <Tooltip 
                        title={(carpooling.ecology) 
                            ? "ecologic"
                            : "not ecologic"} 
                        placement='right'
                    >
                        <span>
                            <PiCertificateLight 
                                size={28}
                                style={ (carpooling.ecology) 
                                ? {color:'#07ba4c'}
                                : {color:'#c6c6c6'}}
                            />
                        </span>
                    </Tooltip>
                </Box>     
            </Grid>
            <Grid 
                size={6}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    mt:3,
                    pl:1
                }}
            >
                <Box
                    sx={{
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <PiCalendarDuotone size={24}/>
                    <Typography
                        sx={{
                            alignItems:'center',
                            fontSize:'0.8rem'
                        }}
                    >
                        &nbsp;&nbsp;{carpooling.date}
                    </Typography>
                </Box>
                <Stepper sx={{mt:1 }}>
                    <Step>
                        <StepLabel icon={<PiClockLight size={22}/>}>{carpooling.departHour}</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel icon={<PiClockCountdownLight size={22}/>}>{carpooling.endHour}</StepLabel>
                    </Step>
                </Stepper>    
            </Grid>
            <Grid 
                size={2}
                sx={{
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'center',
                }}
            >
                <Box
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        mb:1
                    }}
                >

                    <Tooltip title="Nombre de place(s) restante(s)" placement="top">
                        <span>
                            <PiSeatbeltLight size={20}/> 
                        </span>
                    </Tooltip>
                    <Typography sx={{mx:1,fontSize:'0.9rem'}}>: {carpooling.numberSeat} places</Typography>
                </Box>
                <Box
                    sx={{
                        display:'flex',
                        alignItems:'center',
                        mb:1
                    }}
                >
                    <Tooltip title="Prix en crédit" placement='bottom'>
                        <span>
                            <GrMoney size={20}/> 
                        </span>
                    </Tooltip>
                    <Typography
                        sx={{
                            mx:1,
                            fontSize:'0.9rem'
                        }}
                    >
                        : {carpooling.price} crédits
                    </Typography>
                </Box>

            </Grid>

        </Grid>
        </Link>
    </Card>
    

    </>
  )
}
