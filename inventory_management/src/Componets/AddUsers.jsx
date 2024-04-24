import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleAdd = () => {
    console.log('Add:', { username, password, role, status });
  };

  const handleUpdate = () => {
    console.log('Update:', { username, password, role, status });
  };

  const handleDelete = () => {
    console.log('Delete:', { username, password, role, status });
  };

  return (
    <Box sx={{ flexGrow: 1, marginTop: 4, marginLeft: 2 }}>
      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="enter username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={handleUsernameChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Role"
              variant="outlined"
              fullWidth
              value={role}
              onChange={handleRoleChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Box mb={2}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              label="Status"
              variant="outlined"
              fullWidth
              value={status}
              onChange={handleStatusChange}
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary" onClick={handleAdd} sx={{ marginRight: 2 }}>
          Add
        </Button>
        <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ marginRight: 2 }}>
          Update
        </Button>
        <Button variant="contained" color="primary" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Box>
  );
}
