import SearchBar from '@/components/SearchBar'
import { Avatar, Box, Container, Grid2 as Grid, Rating, Step, StepLabel, Stepper, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { PiCertificateLight,PiCalendarDuotone,PiClockLight, PiClockCountdownLight, PiSeatbeltLight  } from "react-icons/pi";
import { LiaFlagCheckeredSolid } from "react-icons/lia";
import { CiLocationOn } from "react-icons/ci";
import ResultSearch from '@/components/ResultSearch';

export default function Carpooling() {
  return (
    <Box flexGrow={1}>
      <Container maxWidth="lg">
        Carpooling page
        <SearchBar/>
        <Grid container spacing={1} mt={5}>
          <Grid size={{ xs:12, md:4}} sx={{ border:1, borderRadius:1}}>
            <Typography
              variant="h5"
            >

              Filtres
            </Typography>
            
          </Grid>
          <Grid size={{ xs:12, md:8}} sx={{ border:1, borderRadius:1}}>
            <ResultSearch/>
          </Grid>
        </Grid>       
      </Container>
      {/**resultats

            <Box sx={{ border:1, mx:2}}>
              <Box sx={{ display:'flex', justifyContent:'space-between',p:2}}>
                <Box sx={{display:'flex', alignItems:'center' }}>
                  <Avatar sx={{mr:2, width:56, height:56}}></Avatar>
                  <Box sx={{ display: 'flex', flexDirection:'column'}}>
                    <Typography sx={{ml:1}}>pseudo</Typography>
                    <Rating value={4}></Rating>
                  </Box>                
                </Box>
                <Tooltip title="ecology travel yes">
                  <PiCertificateLight size={45} style={{color:'#07ba4c'}} />
                </Tooltip>
              </Box>
              
              <Grid container spacing={2} sx={{ border:1}}>
                <Grid size={4}>
                  <PiCalendarDuotone size={24}/>:
                </Grid>
                <Grid size={8}>
                  <Stepper alternativeLabel>
                    <Step>
                      <StepLabel icon={<PiClockLight size={22}/>}>departure's hour</StepLabel>
                    </Step>
                    <Step>
                      <StepLabel icon={<PiClockCountdownLight size={22}/>}>Arrival's hour</StepLabel>
                    </Step>
                  </Stepper>
                </Grid>
              </Grid>   
            </Box>
            <PiSeatbeltLight size={24}/>
            <Typography>nombre de place restante(s):</Typography>
            <Typography>price:</Typography>
            <Stepper alternativeLabel>
              <Step>
                <StepLabel icon={<CiLocationOn size={22} />}>city depart</StepLabel>
              </Step>
              <Step>
                <StepLabel icon={<LiaFlagCheckeredSolid size={22}/>}>City end</StepLabel>
              </Step>
              
            </Stepper>
            
          
            <Typography>ecology travel:</Typography>
      
             */}
    </Box>
  )
}
