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
      .post("http://localhost:4000/student", {
        student_name: data.name,
        student_age: data.age,
         student_department: data.department
      })
      .then(() => {
        alert("New entry created successfully");
      })
      .catch(() => {
        alert("error saving data");
      });
  }
  return (
    <div sx={{ flexGrow: 1 }} align='center'>
      <h1>Login Form</h1>
      <TextField variant='outlined' label='Name' name='name' onChange={inputHandler} />&nbsp;
      <br /><br />
      <TextField variant='filled' label='Age' name='age' onChange={inputHandler} />&nbsp;
      <br /><br />
      <TextField variant='standard' label='Department' name='department' onChange={inputHandler} />
      <br /><br />
      <Button variant='contained' onClick={submit}>Submit</Button>
    </div>
  )
}

export default Signup
