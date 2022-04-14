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
            to="/addnewprofessor"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Add new professor
          </Link>
        </Button>
      </div>
      <br></br>
      <div align="center">
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem>
            <ListItemText primary="imed.hammouda@medtech.tn" />
            <Button variant="contained" color="primary">
              Edit
            </Button>

            <Button variant="outlined" color="error">
              Delete
            </Button>
          </ListItem>
          <Divider />
          <ListItem divider>
            <ListItemText primary="amine.benhassouna@medtech.tn" />
            <Button variant="contained" color="primary">
              Edit
            </Button>

            <Button variant="outlined" color="error">
              Delete
            </Button>
          </ListItem>
          <ListItem>
            <ListItemText primary="mohamedamine.bensassi@medtech.tn" />
            <Button variant="contained" color="primary">
              Edit
            </Button>

            <Button variant="outlined" color="error">
              Delete
            </Button>
          </ListItem>
          <Divider light />
          <ListItem>
            <ListItemText primary="salma.hamza@medtech.tn" />
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

// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';
// import Card from "../components/Card";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

// export default function ResponsiveStack() {
//   return (
//     <div>
//       <Stack
//         direction={{ xs: 'column', sm: 'row' }}
//         spacing={{ xs: 1, sm: 2, md: 4 }}
//       >
//         <Card>Item 1</Card>
//         <Card>Item 2</Card>
//         <Card>Item 3</Card>
//         <Card>Item 4</Card>
//         <Card>Item 5</Card>
//         <Card>Item 6</Card>
//       </Stack>
//     </div>
//   );
// }
