import { Box, Container, Link, Typography } from '@mui/material'
import { lightBlue } from '@mui/material/colors'
import React from 'react'

export default function Footer() {
  return (
    <Box component='footer' sx={{
        display:'flex',
        alignItems:'center',
        bgcolor:lightBlue[700],
        color:'white'

    }}> 
        <Container maxWidth='lg' sx={{ height:'100%'}}>
            <Box sx={{
                display:'flex',
                alignItems:'center',
                gap:2,
                py:2.5
            }}>
                <Typography>
                    <Link href='/mentions-legales' sx={{ 
                        textDecoration:'none',
                        color:'inherit',
                    }}> 
                        Mentions Légales
                    </Link>
                </Typography>
                <Typography>
                    <Link href='mailto:ecoride@ecoride.fr' sx={{ 
                        textDecoration:'none',
                        color:'inherit',
                    }}> 
                        ecoride@ecoride.fr
                    </Link>
                </Typography>
                <Typography sx={{
                    ml:'auto',
                    fontStyle:'italic',
                    fontSize:'0.7rem',
                }}>
                    &copy;&nbsp;2024 | Lehanann.
                </Typography>


            </Box>
        </Container>  
        
    </Box>
  )
}
