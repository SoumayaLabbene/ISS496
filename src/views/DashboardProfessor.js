import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
}

export default function ListDividers() {
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div align="center">
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="Freshman Fall 2021" />
            <Button variant="contained" color="primary">
              Show
            </Button>
          </ListItem>
          <Divider />
          <ListItem divider>
            <ListItemText primary="Freshman Spring 2022" />
            <Button variant="contained" color="primary">
              Show
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Freshman Summer 2022" />
            <Button variant="contained" color="primary">
              Show
            </Button>
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemText primary="Freshman Fall 2022" />
            <Button variant="contained" color="primary">
              Show
            </Button>
          </ListItem>
        </List>
      </div>
    </>
  )
}
