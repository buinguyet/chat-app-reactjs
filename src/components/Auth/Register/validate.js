import { isEmail, isName, isPassword } from "../../../common/shared";

const validate = (values) => {
  const errors = {};
  const { email, username, password, confirmPassword } = values;
  if (!email) {
    errors.email = "Please enter email!";
  } else if (!isEmail(email)) {
    errors.email = "Email is invalid!";
  }
  if (!username) {
    errors.username = "Please enter username!";
  } else if (!isName(username)) {
    errors.username =
      "Username limit in 3-25 characters and is not allowed contain space!";
  }
  if (!password) {
    errors.password = "Please enter password!";
  } else if (!isPassword(password)) {
    errors.password =
      "Password must contain at least 8 characters, include text, number and special character!";
  }
  if (!confirmPassword) {
    errors.confirmPassword = "Please enter confirmPassword!";
  } else if (!isPassword(confirmPassword)) {
    errors.confirmPassword =
      "Password must contain at least 8 characters, include text, number and special character!";
  }
  if (confirmPassword !== password) {
    errors.confirmPassword = "Confirm password must match with password!";
  }
  return errors;
};

export default validate;
