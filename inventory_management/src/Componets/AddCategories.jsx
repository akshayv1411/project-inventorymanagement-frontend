import React,{useState} from 'react'
import './AddCategories.css'
import './NavBar1'
import {  Typography ,Button,Box} from '@mui/material';
import TextField from '@mui/material/TextField';
// import Button from 'react-bootstrap/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function AddCategories() {
const [category,setCategory]=useState('')
  return (
    <div>
      
   <Box sx={{display:"flex",justifyContent:"flex-start",flexDirection:"row"}}>
    
     <Box id="todo">
     <TextField id="outlined-basic" 
     label="Categories" variant="outlined" 
     value={category} 
     onChange={(e)=>setCategory(e.target.value)}
     sx={{
       '& > :not(style)': { m: 5, width: '25ch',height:"7ch" },
     }} />
     <Box 
      height={'50%'}
      width="80%"
      display={'flex'}
     justifyContent={"center"}
      alignItems={'center'}
      >
  <Stack spacing={{ xs: 1, sm: 2,ml:3}} direction="row" useFlexGap flexWrap="wrap">
      <Button variant="contained"sx={{padding:"10px,16px"}}>ADD</Button>
      <Button variant="contained">UPDATE</Button>
      </Stack>
      <Stack spacing={{ xs: 1, sm: 2,ml:3}} direction="row" useFlexGap flexWrap="wrap">
      <Button variant="contained">REMOVE</Button>
   
      <Button variant="contained">Clear</Button>
      </Stack>
     </Box>
</Box>   
<Box>
<Typography variant="h5" component="div" sx={{ mt: 4,marginLeft:"12px",background:"#f3f1ee" }}>
          All Categories
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2,width:"68vw",marginLeft:'12px',background:"#f3f1ee"}}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Date</TableCell>
                
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      </Box>
      </div>
      

  )
}

export default AddCategories