/**SearchBar
 * search function
 * 2 textfield for city, departure and arrival, and datepicker 
 */

"use client"

import { Box, Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/fr';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { lightBlue } from '@mui/material/colors';

export default function SearchBar() {

  /** object search store city departure, arrival and date */
  const [search,setSearch] = useState({
    departure: '',
    arrival: '',
    date: dayjs(),
  })

  /**function event on change to input(textfield) field controlled */
  const handleChange = (e: any)=>{
    const { name, value}  = e.target;
    setSearch({...search,[name]: value })
  }

  /**function to submitting form parse in json */
  const handleSubmit = (e: any)=>{
    e.preventDefault();
    console.log(JSON.stringify(search));
  }

  return (
    <form onSubmit={handleSubmit}>
    <Box sx={{display:'flex', mt:5, justifyContent:'center', gap:2 }}>
     
        <TextField
          required
          size="small"
          name="departure"
          label="Departure's city"
          value={search.departure}
          onChange={handleChange}
        />
        <TextField
          required
          size="small"
          name="arrival"
          label="Arrival's city"
          value={search.arrival}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr">
          <DatePicker           
            name="date"
            label="Date"
            value={search.date}
            minDate={dayjs()} /**date can't choice previous date at now */
            onChange={(newDate)=>{setSearch({...search, date: dayjs(newDate) }) }}/**return date choiced */
            slotProps={{
              textField: {
               size:"small",
              },
            }}
          />
        </LocalizationProvider>
        <Button variant="contained" type='submit' size="small" sx={{bgcolor:lightBlue[700]}}>
            Search
        </Button>
    </Box>
    </form>
  )
}
