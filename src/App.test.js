import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

configure({ adapter: new Adapter() });

describe("App", () => {
  it("should display form, when submit result is not 'success", () => {
    const app = shallow(
      <App initialSubmitResult={{ result: "", message: "" }} />
    );

    expect(app.find("LoginForm")).toBeTruthy();
  });

  it("should display success message, when submit result is sucessful", () => {
    const app = shallow(
      <App
        initialSubmitResult={{
          result: "success",
          message: "Successful sign in!"
        }}
      />
    );

    expect(app.find("SuccessfulLogin")).toBeTruthy();
  });
});
