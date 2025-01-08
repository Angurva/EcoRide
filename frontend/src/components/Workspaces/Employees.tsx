import { Box, Grid2 as Grid, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function Employees() {
  return (
    <Box>
      Employees workspace
      <Grid container>
        <Grid sx={{ }} size={4}>
          test
        </Grid>
        <Grid sx={{ }} size={8}>
            <Card sx={{ maxWidth:'14rem', '&:hover':{
              bgcolor:'grey',
            } }}>
              <CardContent>
                <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                  Carpooling N°: 225852
                </Typography >
                <Typography gutterBottom sx={{ color: 'primary.main', fontSize: 14, fontWeight: 700 }}>
                  Travel: City A - City B</Typography>
                <Typography sx={{ fontSize: 14 }}>
                  Date: 21/12/2024</Typography>
                <Typography sx={{ fontSize: 12}}>
                  Driver: Tartanpion
                </Typography>  
                <Typography sx={{ fontSize: 12}}>
                  Passager: Cunégonde
                </Typography>  
              </CardContent>
            </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
