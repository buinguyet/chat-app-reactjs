import { isEmail, isPassword } from "../../../common/shared";

const validate = (values) => {
  const errors = {};
  const { email, password } = values;
  if (!email) {
    errors.email = "Please enter email!";
  } else if (!isEmail(email)) {
    errors.email = "Email is invalid!";
  }
  if (!password) {
    errors.password = "Please enter password!";
  } else if (!isPassword(password)) {
    errors.password =
      "Password must contain at least 8 characters, include text, number and special character!";
  }
  return errors;
};

export default validate;
