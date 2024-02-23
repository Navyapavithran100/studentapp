import { TextField, Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'




const Signup = () => {

  var [data, setData] = useState();
  
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data);
  }

  const submit = () => {
    axios
      .post("http://localhost:4002/ps", {
        name: data.name,
        age: data.Age,
        department: data.Department
      })
      .then(() => {
        alert("New entry created successfully");
      })
      .catch(() => {
        AudioListener("error saving data");
      });
  }
  return (
    <div sx={{ flexGrow: 1 }} align='center'>
      <h1>Login Form</h1>
      <TextField variant='outlined' label='Name' name='name' onChange={inputHandler} />&nbsp;
      <br /><br />
      <TextField variant='filled' label='Age' name='Age' onChange={inputHandler} />&nbsp;
      <br /><br />
      <TextField variant='standard' label='Department' name='Department' onChange={inputHandler} />
      <br /><br />
      <Button variant='contained' onClick={submit}>Submit</Button>
    </div>
  )
}

export default Signup
