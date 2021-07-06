import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import EmailIcon from "@material-ui/icons/Email";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import InputAdornment from "@material-ui/core/InputAdornment";
import backgroundImage from "../../../assets/images/login1.jpg";
import { useStyles } from "./styles";
import { AccountCircle } from "@material-ui/icons";
const Register = () => {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paperStyle}>
      <Grid container spacing={3}>
        <Grid align="center" item sx={12} sm={12} md={12} lg={12} xl={12}>
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Welcome to Funny Chat!</h2>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <img src={backgroundImage} alt="img" width="100%" height="100%" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <h3>Sign up</h3>
          <TextField
            className={classes.input}
            label="Email"
            variant="outlined"
            placeholder="Enter email"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.input}
            label="Username"
            variant="outlined"
            placeholder="Enter username"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.input}
            label="Password"
            variant="outlined"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.input}
            label="Confirm Password"
            variant="outlined"
            placeholder="Enter confirm password"
            type="password"
            fullWidth
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon className={classes.icon} />
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            variant="contained"
            className={classes.btnStyle}
          >
            <h4 className={classes.title}>Sign up</h4>
          </Button>
          <Typography className={classes.text}>
            Did you have an account?{" "}
            <Link className={classes.a} to="/login">
              Sign In
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Register;
