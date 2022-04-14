import * as React from 'react'
import Box from '@mui/material/Box'
import Navbar from '../components/Navbar'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

export default function ListDividers() {
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <div>
        <Box>
          <TextField label={'Name'} id="margin-normal" margin="normal" />
          <br></br>
          <TextField label={'Level'} id="margin-normal" margin="normal" />
          <br></br>
          <TextField label={'Range from'} id="margin-normal" margin="normal" />
          <TextField label={'to'} id="margin-normal" margin="normal" />
          <br></br>
          <Button variant="contained" color="success">
            Add
          </Button>
        </Box>
      </div>
    </>
  )
}
