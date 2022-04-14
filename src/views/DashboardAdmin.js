import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

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
          <ListItem button>
            <Link to="/terms" style={{ textDecoration: 'none', color:'black'}}>
              <ListItemText primary="Terms" />
            </Link>
          </ListItem>
          <Divider />
          <ListItem button divider>
            <Link to="/courses" style={{ textDecoration: 'none', color:'black'}}>
              <ListItemText primary="Courses" />
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/professors" style={{ textDecoration: 'none', color:'black'}}>
              <ListItemText primary="Professors" />
            </Link>
          </ListItem>
          <Divider light />
          <ListItem button>
            <Link to="/groups" style={{ textDecoration: 'none', color:'black'}}>
              <ListItemText primary="Groups" />
            </Link>
          </ListItem>
        </List>
      </div>
    </>
  )
}
