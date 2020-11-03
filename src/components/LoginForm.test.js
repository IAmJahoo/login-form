import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoginForm from "./LoginForm";

configure({ adapter: new Adapter() });

describe("LoginForm", () => {
  it("should show section with invalidation error when there is one", () => {
    const handleSubmit = () => {};
    const loginForm = shallow(
      <LoginForm handleSubmit={handleSubmit} submitResult={{ result: "abc" }} />
    );

    expect(loginForm.find("section").prop("className")).toBe("failure");
  });

  it("should call handleSubmit on submit click", () => {
    const handleSubmit = jest.fn();
    const loginForm = shallow(
      <LoginForm handleSubmit={handleSubmit} submitResult={{ result: "" }} />
    );
    const eventMock = {};

    loginForm
      .find('input[name="email"]')
      .simulate("change", { target: { value: "test@test.pl" } });
    loginForm
      .find('input[name="password"]')
      .simulate("change", { target: { value: "Password1" } });
    loginForm.simulate("submit", eventMock);

    expect(handleSubmit).toHaveBeenCalledWith(
      eventMock,
      "test@test.pl",
      "Password1"
    );
  });
});
