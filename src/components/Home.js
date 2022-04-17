import React, { useEffect } from 'react'
import { styled} from '@mui/material/styles';
import "./Home.css"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, loadUsers } from '../redux/action';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from 'react-router-dom';





const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 10,
  },
}));


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.green,
    color: theme.palette.common.green,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));






const Home = () => {
 // const classes = useStyles()
  let dispatch = useDispatch()
  let navigate = useNavigate()
  
  const {users}= useSelector(state=>state.data)
  useEffect(()=>{
    dispatch(loadUsers())
  },[])
  const handleDelete=(id)=>{
    if(window.confirm('are you sure')){
      dispatch(deleteUser(id))
    }
  }
  return (
    <div>
     <div >
     <Button className="btn1" variant='contained' onClick={()=>navigate('/add-city')}>Add city</Button>
     </div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>id </StyledTableCell>
            <StyledTableCell align="center">Country</StyledTableCell>
            
            <StyledTableCell align="center">Population</StyledTableCell>
            <StyledTableCell align="center">City</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {users&&users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.id}
              </StyledTableCell>
              <StyledTableCell align="center">{user.country}</StyledTableCell>
              <StyledTableCell align="center">{user.population}</StyledTableCell>
              <StyledTableCell align="center">{user.city}</StyledTableCell>
              
              <StyledTableCell align="center">
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
               <Button onClick={()=>handleDelete(user.id)}>Delete</Button>
               <Button onClick={()=>navigate(`/edit-city/${user.id}`)}>Edit</Button>
     
    </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home