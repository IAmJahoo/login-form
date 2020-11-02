import { defineEmailClasses, definePasswordClasses } from "./formClases";

describe("Define email classes", () => {
  it("should return empty classes for null email validation result", () => {
    expect(defineEmailClasses(null)).toStrictEqual({ label: "", input: "" });
  });

  it("should return '*-valid' for email validation returning true", () => {
    expect(defineEmailClasses(true)).toStrictEqual({
      label: "label-valid",
      input: "input-valid"
    });
  });

  it("should return '*-invalid' for email validation returning false", () => {
    expect(defineEmailClasses(false)).toStrictEqual({
      label: "label-invalid",
      input: "input-invalid"
    });
  });
});

describe("Define password classes", () => {
  it("should return empty classes for null password validation result", () => {
    expect(definePasswordClasses(null)).toStrictEqual({ label: "", input: "" });
  });

  it("should return '*-valid' for password validation returning true", () => {
    expect(definePasswordClasses({ isValidPassword: true })).toStrictEqual({
      label: "label-valid",
      input: "input-valid"
    });
  });

  it("should return '*-invalid' for password validation returning false", () => {
    expect(definePasswordClasses({ isValidPassword: false })).toStrictEqual({
      label: "label-invalid",
      input: "input-invalid"
    });
  });
});
