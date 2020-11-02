import { validatePassword, validateEmail } from "./validators";

const emailWithoutAT = "qwerty.com";
const emailWithoutDomain = "qwer@ty";
const completeEmail = "qwer@ty.com";
const passwordWithoutNumber = "Password";
const tooShortPassword = "Pass1";
const passwordWithoutUppercase = "password1";
const passwordWithoutLowercase = "PASSWORD1";
const passwordPassingCriteria = "Password1";

describe("Email validator", () => {
  it("should return null when argument is empty string", () => {
    expect(validateEmail("")).toBe(null);
  });

  it("should return false for invalid emails", () => {
    expect(validateEmail(emailWithoutAT)).toBe(false);
    expect(validateEmail(emailWithoutDomain)).toBe(false);
  });

  it("should return true for valid email", () => {
    expect(validateEmail(completeEmail)).toBe(true);
  });
});

describe("Password validator", () => {
  it("should indicate invalid password when input value is too short", () => {
    const validationResult = validatePassword(tooShortPassword);

    expect(validationResult.isValidPassword).toBe(false);
    expect(validationResult.hasValidLength).toBe(false);
  });

  it("should indicate invalid password when input value has not at least one number", () => {
    const validationResult = validatePassword(passwordWithoutNumber);

    expect(validationResult.isValidPassword).toBe(false);
    expect(validationResult.hasAtLeastOneNumber).toBe(false);
  });

  it("should indicate invalid password when input value has not at least one lowercase letter", () => {
    const validationResult = validatePassword(passwordWithoutLowercase);

    expect(validationResult.isValidPassword).toBe(false);
    expect(validationResult.hasAtLeastOneLowercaseLetter).toBe(false);
  });

  it("should indicate invalid password when input value has not at least one uppercase latter", () => {
    const validationResult = validatePassword(passwordWithoutUppercase);

    expect(validationResult.isValidPassword).toBe(false);
    expect(validationResult.hasAtLeastOneUppercaseLetter).toBe(false);
  });

  it("should indicate valid password when all criteria are passed", () => {
    const validationResult = validatePassword(passwordPassingCriteria);

    expect(validationResult.isValidPassword).toBe(true);
    expect(validationResult.hasValidLength).toBe(true);
    expect(validationResult.hasAtLeastOneNumber).toBe(true);
    expect(validationResult.hasAtLeastOneLowercaseLetter).toBe(true);
    expect(validationResult.hasAtLeastOneUppercaseLetter).toBe(true);
  });
});
