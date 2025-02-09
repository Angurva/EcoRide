import React from 'react';
import { Box, Stack, Tooltip, Typography, } from '@mui/material';
import { PiRoadHorizonThin, PiClockCounterClockwiseThin, PiPawPrintThin, PiCigaretteSlashThin, PiCigaretteThin } from "react-icons/pi";
import {  } from "react-icons/pi";

export default function Options({carpooling}: {carpooling: any}) {
  return (
    <Stack spacing={3}>
        <Box sx={{display:'flex', alignItems:'center'}}>
            <Tooltip title='Type de voyage' placement='left'>
                <span>
                    <PiRoadHorizonThin size={24}/>
                </span>
            </Tooltip>
            { carpooling.ecology 
                ? <Typography sx={{ml:2, color:'success.main', fontWeight:500, fontSize:'1rem'}}>Ecologique</Typography>
                : <Typography sx={{ml:2, color:'gray', fontWeight:500, fontSize:'1rem' }}>Non-écologique</Typography>
            }                                  
        </Box>

        <Box sx={{display:'flex', alignItems:'center'}}>
            <Tooltip title='Temps du trajet' placement='left'>
                <span>
                    <PiClockCounterClockwiseThin size={24}/>
                </span>
            </Tooltip>
            <Typography sx={{mx:2,fontSize:'1rem'}}>{carpooling.timelapse}'' min</Typography>   
        </Box>

        { carpooling.smoker 
            ? 
                <Box sx={{ display:'flex'}}>
                    <PiCigaretteThin size={24}/>
                    <Typography sx={{ ml:2, fontSize:'1rem' }}>Fumeur autorisé</Typography>
                </Box>
                    
            
            :
                <Box sx={{ display:'flex' }}>
                    <PiCigaretteSlashThin size={24}/>
                    <Typography sx={{ ml:2, fontSize:'1rem' }}>Voyage non-fumeur</Typography>
                </Box>  
        }

    
        { carpooling.animal
            ? 
                <Box sx={{ display:'flex' }}>
                    <PiPawPrintThin size={32}/>
                    <Typography sx={{ ml:2, fontSize:'1rem' }}>Votre animal de compagnie est le bienvenue</Typography>
                </Box>
            :
                <Box sx={{ display:'flex' }}>
                    <PiPawPrintThin size={32}/>
                    <Typography sx={{ ml:2, fontSize:'1rem' }}>Je ne préfère pas voyager avec un animal.</Typography>
                </Box>
        }
    
       
    </Stack>
  )
}
