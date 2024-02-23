import { TableBody, TableContainer, TableHead, TableRow, Table, TableCell, Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Signup from './Signup';

const Api = () => {
    var [user, setUsers] = useState([]);
    var [selected,setSelected]=useState({});
    var[edit,setEdit]=useState(false)
    useEffect(() => {
        axios.get("http://localhost:4000/students").then(response => {
            console.log(response.data)
            setUsers(response.data)
        })
    }, []);

    const deleteperson = (id) => {
        axios
            .delete("http://localhost:4000/student/" + id)
            .then(() => {
                alert("deleted a row");
                window.location.reload();
            })
            .catch(() => {
                alert("could not delete the row");
            });

    };
    const getData=(id)=>{
        axios
        .get("http://localhost:4000/student/"+id)
        .then((response)=> {
            setSelected(response.data);
            setEdit(true);
        })
        .catch(()=>{
            alert("cannot edit now");
     } );
    };





    return (
        <>
    
        {edit ?(
            <Signup method="put"
            data={{
                id: selected._id, student_name: selected.student_name,student_age:selected.student_age,
                student_department:selected.student_department}}/>
        ):
         (
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
                        {user.map((val, i) => {
                            return (
                                <TableRow>
                                    <TableCell key={i}>{val.student_name} </TableCell>
                                    <TableCell key={i}>{val.student_age} </TableCell>
                                    <TableCell key={i}>{val.student_department} </TableCell>
                                    <TableCell>
                                        <Button variant="contained"
                                            onClick={() => {
                                                deleteperson(val._id);
                                            }}
                                            color="error">
                                            DELETE
                                        </Button>
                                        <Button variant="contained"
                                            onClick={() => {
                                                getData(val._id);
                                            }}
                                            color="error">
                                            EDIT
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
        </>
    )

}
export default Api
