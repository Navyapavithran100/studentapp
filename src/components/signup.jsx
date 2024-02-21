import {TextField, Typography,Button} from '@mui/material'
import React, { useState } from 'react'


const signup = () => {
  return (
    <div>
      <h1>Sign up Form</h1>
        <TextField variant='outlined' label='username' name='fname'/>&nbsp;
        <br /><br />
        <TextField variant='filled'label='password' name='password'/>&nbsp;
        <br /><br />
        <TextField variant='standard'label='Email'  name='email'/>
        <br /><br />

        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default signup
