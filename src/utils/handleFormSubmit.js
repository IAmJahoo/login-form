import { validateEmail, validatePassword } from "./validators";

function ValidationError(result, message) {
  this.result = result;
  this.message = message;
}

const acceptedCredentials = {
  email: "test@test.pl",
  password: "Password1"
};

export const handleFormSubmit = (email, password) => {
  try {
    if (!validateEmail(email)) {
      throw new ValidationError(
        "invalid email",
        "Invalid email. Please check if you typed correct email."
      );
    } else if (
      validatePassword(password) === null ||
      !validatePassword(password).isValidPassword
    ) {
      throw new ValidationError(
        "invalid password",
        "Invalid password. Check if your password matches criteria."
      );
    } else if (email !== acceptedCredentials.email) {
      throw new ValidationError(
        "incorrect email",
        "Unknown email. Please, check the email field, and try again."
      );
    } else if (password !== acceptedCredentials.password) {
      throw new ValidationError(
        "incorrect password",
        "Incorrect password. Please, try again"
      );
    }

    return { result: "success", message: "Successfuly signed in!" };
  } catch (error) {
    return error;
  }
};
