import * as React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Navbar from '../components/Navbar'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const style = {
  width: '100%',
  maxWidth: 500,
  bgcolor: 'background.paper',
}

export default function ListDividers() {
  return (
    <>
      <Navbar></Navbar>
      <br></br>
      <div>
        <Button variant="contained" color="success">
          <Link
            to="/addnewcourse"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Add new course
          </Link>
        </Button>
      </div>
      <br></br>
      <div align="center">
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="Fall 2021" />
            <Button variant="contained" color="primary">
              Edit
            </Button>

            <Button variant="outlined" color="error">
              Delete
            </Button>
          </ListItem>
          <Divider />
          <ListItem divider>
            <ListItemText primary="Spring 2022" />
            <Button variant="contained" color="primary">
              Edit
            </Button>

            <Button variant="outlined" color="error">
              Delete
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="Summer 2022" />
            <Button variant="contained" color="primary">
              Edit
            </Button>

            <Button variant="outlined" color="error">
              Delete
            </Button>
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemText primary="Fall 2022" />
            <Button variant="contained" color="primary">
              Edit
            </Button>

            <Button variant="outlined" color="error">
              Delete
            </Button>
          </ListItem>
        </List>
      </div>
    </>
  )
}
