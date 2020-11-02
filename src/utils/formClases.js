export const defineEmailClasses = (isEmailValid) =>
  isEmailValid === null
    ? { label: "", input: "" }
    : {
        input: isEmailValid ? "input-valid" : "input-invalid",
        label: isEmailValid ? "label-valid" : "label-invalid"
      };

export const definePasswordClasses = (isPasswordValid) =>
  isPasswordValid === null
    ? { label: "", input: "" }
    : {
        input: isPasswordValid.isValidPassword
          ? "input-valid"
          : "input-invalid",
        label: isPasswordValid.isValidPassword ? "label-valid" : "label-invalid"
      };
