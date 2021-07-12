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
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import validate from "./validate";
import styles from "../Register/styles.css";

const renderField = ({
  input,
  label,
  type,
  classes,
  placeholder,
  InputProps,
  meta: { touched, error },
}) => {
  return (
    <>
      <TextField
        {...input}
        className={classes.input}
        label={label}
        variant="outlined"
        placeholder={placeholder}
        type={type}
        fullWidth
        required
        InputProps={InputProps}
      />
      {touched && error && (
        <span style={{ color: "#7986cb", fontSize: "11px" }}>{error}</span>
      )}
    </>
  );
};

const Login = (props) => {
  const { handleSubmit, onClickLogin, infoLogin, errorLogin, isLogin } = props;
  const classes = useStyles();
  const handleSubmitFrom = (data) => {
    if (onClickLogin) onClickLogin(data);
  };
  return (
    <Paper elevation={3} className={classes.paperStyle}>
      <Grid container spacing={3}>
        <Grid align="center" item sx={12} sm={12} md={12} lg={12} xl={12}>
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Welcome to Funny Chat!</h2>
          {isLogin && (
            <div className="lds-default">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <img src={backgroundImage} alt="img" width="100%" height="100%" />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{ marginTop: "35px" }}
        >
          {errorLogin ? (
            <span className={classes.error}>{errorLogin}</span>
          ) : (
            ""
          )}
          <h3>Sign in</h3>
          <form onSubmit={handleSubmit(handleSubmitFrom)}>
            <Field
              name="email"
              type="text"
              component={renderField}
              label="Email"
              placeholder="Enter email"
              classes={classes}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon className={classes.icon} />
                  </InputAdornment>
                ),
              }}
            />
            <Field
              name="password"
              type="password"
              component={renderField}
              label="Password"
              placeholder="Enter password"
              classes={classes}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <VpnKeyIcon className={classes.icon} />
                  </InputAdornment>
                ),
              }}
            />
            <br />
            <Typography className={classes.textSmall}>
              <Link className={classes.a} to="/">
                Forgot password ?
              </Link>
            </Typography>
            <Button
              type="submit"
              variant="contained"
              className={classes.btnStyle}
            >
              <h4 className={classes.title}>Sign in</h4>
            </Button>
          </form>
          <Typography className={classes.text}>
            Do you have an account?{" "}
            <Link className={classes.a} to="/register">
              Sign Up
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const FORM_NAME = "LOGIN_FORM";
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(withReduxForm)(Login);
