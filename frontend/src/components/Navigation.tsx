import { AppBar, Box, Container, Link, Typography } from '@mui/material'
import React from 'react'
import { lightBlue,lightGreen, lime } from '@mui/material/colors'
import { GiTreeBranch } from "react-icons/gi";
import { HiHome } from "react-icons/hi2";
import { IoIosCar } from "react-icons/io";
import { FaMailBulk } from "react-icons/fa";


export default function Navigation() {

    const menuNav = [
        {name:'Home', path:'/', icon: HiHome},
        {name:'Carpooling', path:'/carpooling', icon: IoIosCar},
        {name:'Contact', path:'/contact', icon: FaMailBulk},
    ]

    const authNav = [
        {name:'Sign in', path:'/signin'},
        {name:'Sign up', path:'/signup'},
    ]

  return (
    <AppBar sx={{
        position:'sticky',
        height:'80px',
        bgcolor:lightBlue[700],
    }}>
        <Container maxWidth='lg' sx={{height:'100%'}}>
            <Box sx={{ 
                height:'100%',
                display:'flex',
                gap:5,
            }}>
                <Box sx={{ height:'100%',
                    display: 'flex',
                    alignItems:'center',
                    gap:2,
                    fontSize:'2.2rem'
                    }}>
                        <GiTreeBranch color={lightGreen['A200']}/>
                        <Typography sx={{
                            fontSize:'2rem',
                            letterSpacing:3,
                        }}>EcoRide</Typography>

                </Box>
                <Box component='ul' sx={{ display:'flex',alignItems:'center', gap:2}}>
                {
                    menuNav.map((item)=>(
                        <Box component='li' key={item.name} sx={{display:'flex'}}>
                            <Link href={item.path} sx={{ 
                                display:'flex',
                                alignItems:'center',
                                color:'white',
                                gap:1,
                                fontSize:'1.2rem',
                                textDecoration:'none',
                                '&:hover':{
                                    color: lightGreen['A200']
                                }     
                            }}>
                                <item.icon/>
                                <Typography sx={{ 
                                    fontSize:'1.2rem' ,
                                    fontWeight:700
                                }}>{item.name}</Typography>
                            </Link>
                            
                        </Box>
                    ))
                }
                </Box>
                <Box sx={{
                    ml:'auto',
                    display:'flex',
                    alignItems:'center',
                    gap:3
                }}>
                    {
                        authNav.map((item)=>(
                            <Link key={item.name} href={item.path} sx={{}}>
                                <Typography 
                                    sx={ item.name === 'Sign up' 
                                    ? {
                                        border:2,
                                        borderRadius:2,
                                        p:0.9,
                                        textDecoration:'none',
                                        color:'white',
                                        fontSize:'1rem',
                                        fontWeight:500,
                                        '&:hover':{
                                            color: lightGreen['A200']
                                        }    
                                    }
                                    : {
                                        textDecoration:'none',
                                        color:'white',
                                        fontWeight:700,
                                        fontSize:'1rem',
                                        '&:hover':{
                                            color: lightGreen['A200']
                                        }    
                                    }
                                }>
                                    {item.name}
                                </Typography>
                            </Link>
                        ))
                    }
                </Box>
            </Box>

        </Container>
    </AppBar>
  )
}
