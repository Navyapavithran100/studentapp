import { TableBody, TableContainer, TableHead, TableRow,Table,TableCell,Button} from '@mui/material'
import axios from 'axios';
import React,{useEffect, useState} from 'react'

const Api = () => {
    var[user,setUsers]=useState([]);
    useEffect(() =>{
        axios.get("http://localhost:4000/students").then(response=>{
            console.log(response.data)
            setUsers(response.data)
        })
    }, [])

const deleteperson =(id)=>{
    axios
    .delete ("http://localhost:4000/student/"+id)
    .then(()=>{
        alert("deleted a row");
        window.location.reload();
    })
    .catch(()=>{
        alert("could not delete the row");
    });

        };





  return (
    <div>
     <TableContainer>
        <Table>
            <TableHead>
   <TableRow>
    <TableCell>Name</TableCell>
    <TableCell>Age</TableCell>
    <TableCell>Department</TableCell>
    <TableCell> 
    </TableCell>
    <TableCell> </TableCell>
   </TableRow>
    </TableHead>
    <TableBody>
        {user.map((val,i)=>{
            return(
                <TableRow>
                    <TableCell key={i}>{val.student_name} </TableCell>
                    <TableCell key={i}>{val.student_age} </TableCell>
                    <TableCell key={i}>{val.student_department} </TableCell>
<TableCell>
    <Button variant="contained"
    onClick={() =>{
        deleteperson(val._id);
    }}
    color="error">
        DELETE 
        </Button>
</TableCell>
                </TableRow>
                
            )
        })}       
    
    </TableBody>
    </Table>
     </TableContainer>
    </div>
  )
    
    }
export default Api
