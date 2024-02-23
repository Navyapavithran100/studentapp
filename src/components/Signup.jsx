import { TextField, Button } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'





const Signup = (props) => {

  var [data, setData] = useState(
    {
      id:props.data.id,
      student_name:props.data.student_name,
      student_age:props.data.student_age,
      student_department:props.data.student_department,


    });
  
  const inputHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data);
  }

  const submit = () => {
    axios
      .post("http://localhost:4000/student", {
        student_name: data.name,
        student_age: data.age,
         student_department: data.department,
      })
      .then(() => {
        alert("New entry created successfully");
      })
      .catch(() => {
        alert("error saving data");
      });
  };
  return (
    <div sx={{ flexGrow: 1 }} align='center'>
      <h1>Login Form</h1>
      <TextField variant='outlined' value={data.student_name} label='Name' name='student_name' onChange={inputHandler} />&nbsp;
      <br /><br />
      <TextField variant='filled' value={data.student_age} label='Age' name='student_age' onChange={inputHandler} />&nbsp;
      <br /><br />
      <TextField variant='standard' value={data.student_department} label='department' name='student_department' onChange={inputHandler} />
      <br /><br />
      <Button variant='contained' onClick={submit}>Submit</Button>
    </div>
  )
}

export default Signup
