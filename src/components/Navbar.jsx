import { AppBar,Typography,Button,Toolbar} from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StudentApp
          </Typography>
          <Button ><Link to='/t' style={{color:'white'}}> signup</Link>
           </Button>
          <Button ><Link to='/a' style={{color:'white'}}> viewstudent</Link>
          </Button>
          <Button ><Link to='/b' style={{color:'white'}}> Tablearray</Link>
          </Button>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar
