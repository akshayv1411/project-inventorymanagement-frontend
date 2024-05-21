import React from "react";
import { Avatar, FormControlLabel, Grid, Paper, TextField, Checkbox, Button, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
const Login = () => {
  const paperStyle = {
    padding: 20,
    height: '50vh',
    width: "30vw",
    margin: "20px auto"
  };

  const avatarStyle = { backgroundColor: 'green' };

  const textFieldStyle = {
    marginBottom: '10px' 
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Paper elevation={10} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
          <h2>Sign in</h2>
        </Grid> 
        <Grid container direction="column" spacing={6} alignItems="center">
          <Grid item>
            <TextField label="Username" placeholder="Enter Username" fullWidth required style={textFieldStyle} />
          </Grid>
          <Grid item>
            <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required />
          </Grid>
          <Grid item>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>Sign In</Button>
            <Typography>
              <Link href="#" variant="body2">Forgot Password?</Link>
            </Typography>
            <Typography>
              <Link to={"/signup"} variant="body2">Don't have an account? Sign up</Link>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
