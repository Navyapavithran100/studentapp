import { Grid, TextField} from '@mui/material'
import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
const Viewstudent = () => {

  return (
   <div>
    <h1> STUDENT DETAILS</h1>


<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfObfebORQwF2HVNFz_0Qbx3heqvgG0L0xGQ&usqp=CAU"
        title="student"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Navya P
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Branch:CSE
          <br/>
          Rollno:48
          <br/>
          Year:2022
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>



</div>
  )
}

export default Viewstudent
