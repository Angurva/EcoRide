import React from 'react';
import { Box, Paper, Stack, Step, Stepper, StepLabel, Tooltip, Typography } from '@mui/material';
import { GrLocationPin } from "react-icons/gr";
import { PiCoinsThin } from "react-icons/pi";

export default function Travel({carpooling}:{carpooling:any}) {
  return (
    <Paper elevation={1} sx={{display:'flex', height:'auto',borderRadius:2, py:2, px:4, bgcolor:"#fafafa",}}>
        <Stack justifyContent={'space-between'} sx={{my:0.8,mr:1}}>
            <Typography sx={{ fontSize:'1rem', fontWeight:700 }}>06:00</Typography>
            <Typography sx={{ fontSize:'1rem', fontWeight:700 }}>07:00</Typography>
        </Stack>
        <Stepper orientation='vertical' sx={{ gap:1}}>
            <Step sx={{display:'flex', alignItems:'center', }}>
            
                <StepLabel icon={<GrLocationPin size={24}/>}  
                    sx={{
                        ml:0.1, 
                        
                    }}>
                        <Typography 
                            sx={{
                                letterSpacing:1,
                                fontSize:'1.1rem',
                                fontWeight:500,
                                fontStyle:'italic',
                            }}>City of Depart</Typography>
                    
                </StepLabel>
                
            </Step>
            <Step active sx={{display:'flex', alignItems:'center'}}>
            
                <StepLabel icon={<GrLocationPin size={24} style = {{transform: 'rotate(180deg)' }}/>}>
                <Typography 
                            sx={{
                                letterSpacing:1,
                                fontSize:'1.1rem',
                                fontWeight:500,
                                fontStyle:'italic',
                            }}>City of End</Typography>
                </StepLabel>
            
            </Step>
        </Stepper>
        <Box sx={{display:'flex', alignItems:'center',ml:'auto'}}>
            <Typography sx={{ml:2,mr:0.6,textAlign:'center',fontSize:'2.5rem'}}>{carpooling.price} </Typography>
            <Tooltip title='Montant en crédit' placement='bottom'>
                <span>
                    <PiCoinsThin size={32}/>
                </span>
            </Tooltip>
        </Box>
    </Paper>
  )
}
