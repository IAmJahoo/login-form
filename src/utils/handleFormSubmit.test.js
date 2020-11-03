import { handleFormSubmit } from "./handleFormSubmit";

describe("Handle form submit", () => {
  it("should return invalid email information when email is not valid", () => {
    expect(handleFormSubmit("test@test", "Password1")).toEqual({
      result: "invalid email",
      message: "Invalid email. Please check if you typed correct email."
    });
  });

  it("should return invalid password information when password is not valid", () => {
    expect(handleFormSubmit("test@test.pl", "Password")).toEqual({
      result: "invalid password",
      message: "Invalid password. Check if your password matches criteria."
    });
  });

  it("should return incorrect email information when email is not correct", () => {
    expect(handleFormSubmit("test@test.com", "Password1")).toEqual({
      result: "incorrect email",
      message: "Unknown email. Please, check the email field, and try again."
    });
  });

  it("should return incorrect password information when password is not correct", () => {
    expect(handleFormSubmit("test@test.pl", "Password123")).toEqual({
      result: "incorrect password",
      message: "Incorrect password. Please, try again"
    });
  });

  it("should return success when both email and password are matching accepted credentials", () => {
    expect(handleFormSubmit("test@test.pl", "Password1")).toEqual({
      result: "success",
      message: "Successfuly signed in!"
    });
  });
});
