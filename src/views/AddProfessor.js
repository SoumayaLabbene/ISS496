import * as React from 'react'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'
import { TextField } from '@mui/material'
import { Box } from '@mui/system'


export default function ListDividers() {
  return (
      <>
          <Navbar></Navbar>
          <br></br>
          <div>
        <Box>
          <TextField label={'Email'} id="margin-normal" margin="normal" />
          <br></br>
          
          <Button variant="contained" color="success">
            Add
          </Button>
        </Box>
      </div>
          
          
    </>
  )
}
