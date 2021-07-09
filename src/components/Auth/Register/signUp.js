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
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import validate from "./validate";
import "./styles.css";

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

function Register(props) {
  const {
    handleSubmit,
    onClickRegister,
    errorRegister,
    infoRegister,
    isRegister,
  } = props;
  const handleSubmitFrom = (data) => {
    if (onClickRegister) onClickRegister(data);
  };
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.paperStyle}>
      <Grid container spacing={3}>
        <Grid align="center" item sx={12} sm={12} md={12} lg={12} xl={12}>
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Welcome to Funny Chat!</h2>
          {isRegister && (
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
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          {errorRegister ? (
            <span className={classes.error}>{errorRegister}</span>
          ) : infoRegister?.message ? (
            <span className={classes.success}>{infoRegister?.message}</span>
          ) : (
            ""
          )}

          <h3>Sign up</h3>
          <form onSubmit={handleSubmit(handleSubmitFrom)}>
            <Field
              name="email"
              type="text"
              component={renderField}
              label="Email"
              placeholder="Email"
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
              name="username"
              type="text"
              component={renderField}
              label="Username"
              placeholder="Enter username"
              classes={classes}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle className={classes.icon} />
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
            <Field
              name="passwordConfirm"
              type="password"
              component={renderField}
              label="Confirm Password"
              placeholder="Enter confirm password"
              classes={classes}
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
          </form>
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
}
const FORM_NAME = "REGISTER_FORM";
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate,
});

export default compose(withReduxForm)(Register);
