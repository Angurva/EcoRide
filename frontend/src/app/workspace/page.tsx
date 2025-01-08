"use client"

import { Box, Container } from '@mui/material'
import React, { useState } from 'react'
import { UserWorkspace, AdministratorWorkspace, EmployeeWorkspace } from './Workspace'

export default function Workspace() {
    
    const [role, setRole] = useState('employee')

  return (
    <Box sx={{ flexGrow:1 }}> 
        <Container maxWidth='xl'>
              { (role === 'passager' || role === 'driver') && <UserWorkspace/>}
              { role === 'admin' && <AdministratorWorkspace/>}
              { role === 'employee' && <EmployeeWorkspace/>}
        </Container>
    </Box>    
  )
}
