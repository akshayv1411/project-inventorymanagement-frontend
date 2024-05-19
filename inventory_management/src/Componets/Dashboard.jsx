import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupIcon from '@mui/icons-material/Group';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Dashboardn() {
 

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
     
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
          }}
        >
          <Box>
            <Card sx={{ display: 'inline-block', minWidth: 300, minHeight: 200, mb: 2 }}>
              <CardContent>
                <AccountCircleIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="div">
                  All Users
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card sx={{ display: 'inline-block', minWidth: 300, minHeight: 200, mb: 2 }}>
              <CardContent>
                <GroupIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="div">
                  All customers
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card sx={{ display: 'inline-block', minWidth: 300, minHeight: 200, mb: 2 }}>
              <CardContent>
                <MonetizationOnIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="div">
                  Today's Income
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box>
            <Card sx={{ display: 'inline-block', minWidth: 300, minHeight: 200, mb: 2 }}>
              <CardContent>
                <AttachMoneyIcon sx={{ fontSize: 48 }} />
                <Typography variant="h5" component="div">
                  Total income
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Typography variant="h5" component="div" sx={{ mt: 4 }}>
          All Today's Customers
        </Typography>
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell>CustomerID</TableCell>
                <TableCell>TotalPrice</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Change</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
