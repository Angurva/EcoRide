import React from 'react'
import Users from '@/components/Workspaces/Users';
import Employees from '@/components/Workspaces/Employees';

export function UserWorkspace() {
  return (
    <Users/>
  )
}
export function AdministratorWorkspace() {
  return (
    <div>Administrator Workspace</div>
  )
}
export function EmployeeWorkspace() {
  return (
    <Employees/>
  )
}

