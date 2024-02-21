import { AppBar,Typography,Button,Toolbar} from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            StudentApp
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar
