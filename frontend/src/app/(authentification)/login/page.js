"use client"
import { Box, Button, Card, CardActions, CardContent, CardHeader, Divider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function Login() {

  const [account,setAccount] = useState({
    username:"",
    password:"",
  })

  const handleChange = (e)=>{
    const {name, value} = e.target;
    setAccount({...account, [name]: value});
  } 

  return (
    <Box sx={{display:'flex', flexGrow:1, justifyContent:'center', alignItems:'center', mt:5}}>
     
      <Card sx={{
        width:'30rem',
        
      }}>
        <CardHeader
          title="Ecoride"
          subheader="Connection"
        >
          
        </CardHeader>
        <Divider flexItem sx={{mx:2}}></Divider>
        <CardContent sx={{display:'flex', flexDirection:'column'}}>
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
          >

          </TextField>
          <TextField
            required
            name="password"
            label="Password"
            value={account.username}
            onChange={handleChange}
            helperText="Enter your password"
            sx={{
              my:1,
            }}
          >
          </TextField>
        </CardContent>
        <CardActions sx={{ display:'flex', justifyContent:'space-between',mx:1, mb:2}}>
          
            <Button>
              Cancel
            </Button>
            <Button variant="outlined" type='submit'>
              Ok
            </Button>
        
        </CardActions>
      </Card>
    </Box>
  )
}
