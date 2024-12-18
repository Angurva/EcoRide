"use client"
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, IconButton, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';
import { GiTreeBranch } from "react-icons/gi";
import { lightGreen } from '@mui/material/colors';
//import style from '../../styles/Login.module.css'

export default function SignIn() {

  const [account,setAccount] = useState({
    username:"",
    password:"",
  })

  const handleChange = (e:any)=>{
    const {name, value} = e.target;
    setAccount({...account, [name]: value});
  } 

  const handleSubmit = (e:any)=>{
    e.preventDefault();
    console.log(JSON.stringify(account))
  }

  return (
    <Box 
      sx={{
        display:'flex',
        flexGrow:1,
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <form onSubmit={handleSubmit} >  
        <Card sx={{
          width:'30rem',
          boxShadow:5,
          }}
        >
          <CardHeader
            title="Sign In"
            subheader="Connect to your member space "
            /*action={
              <IconButton disabled>
                <GiTreeBranch color={lightGreen['A200']}/>
              </IconButton>
            }*/
          />
          <Divider flexItem sx={{mx:2}}></Divider>
          <CardContent 
            sx={{
              display:'flex',
              flexDirection:'column'
            }}
          >
            <TextField
              required
              name="username"
              label="Username"
              value={account.username}
              onChange={handleChange}
              helperText="Enter your username"
              sx={{
                my:1,
              
              }}
            />
            <TextField
              required
              type="password"
              name="password"
              label="Password"
              value={account.password}
              onChange={handleChange}
              helperText="Enter your password"
              sx={{
                my:1,
              }}
            />
          </CardContent>
          <CardActions 
            sx={{
              display:'flex',
              justifyContent:'space-between',
              mx:1,
              mb:2
            }}
          >      
            <Button variant="outlined" color="primary">
              <Link href="/">Cancel</Link>
            </Button>
            <Button variant="outlined" type='submit'>
              Ok
            </Button>  
          </CardActions>
        </Card>
      </form> 
    </Box>
  )
}
