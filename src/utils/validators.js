const VALID_PASSWORD_LENGTH = 6;

export const validateEmail = (value) => {
  if (value === "") {
    return null;
  }

  const splitEmail = value.split("@");
  if (splitEmail.length !== 2) {
    return false;
  }

  return splitEmail[1].split(".").length === 2 ? true : false;
};

export const validatePassword = (value) => {
  if (value === "") {
    return null;
  }

  const hasValidLength = value.length >= VALID_PASSWORD_LENGTH;
  const hasAtLeastOneUppercaseLetter = /[A-Z]/.test(value);
  const hasAtLeastOneLowercaseLetter = /[a-z]/.test(value);
  const hasAtLeastOneNumber = /[0-9]/.test(value);

  return {
    hasValidLength,
    hasAtLeastOneLowercaseLetter,
    hasAtLeastOneUppercaseLetter,
    hasAtLeastOneNumber,
    isValidPassword:
      hasValidLength &&
      hasAtLeastOneLowercaseLetter &&
      hasAtLeastOneUppercaseLetter &&
      hasAtLeastOneNumber
  };
};
