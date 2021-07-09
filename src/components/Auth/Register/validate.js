import { isEmail, isName, isPassword } from "../../../common/shared";

const validate = (values) => {
  const errors = {};
  const { email, username, password, passwordConfirm } = values;
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
  if (!passwordConfirm) {
    errors.passwordConfirm = "Please enter passwordConfirm!";
  } else if (!isPassword(passwordConfirm)) {
    errors.passwordConfirm =
      "Password must contain at least 8 characters, include text, number and special character!";
  }
  if (passwordConfirm !== password) {
    errors.passwordConfirm = "Confirm password must match with password!";
  }
  return errors;
};

export default validate;
