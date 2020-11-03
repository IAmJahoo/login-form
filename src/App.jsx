import React, { useState } from "react";

import SuccessfulLogin from "./components/SuccessfulLogin";
import LoginForm from "./components/LoginForm";
import { handleFormSubmit } from "./utils/handleFormSubmit";

import "./styles.css";
import "./styles/validation.css";

export default function App({
  initialSubmitResult = {
    result: "",
    message: ""
  }
}) {
  const [submitResult, setSubmitResult] = useState(initialSubmitResult);
  const handleSubmit = (event, email, password) => {
    event.preventDefault();
    setSubmitResult(handleFormSubmit(email, password));
  };

  return (
    <div className="App">
      {submitResult.result === "success" ? (
        <SuccessfulLogin message={submitResult.message} />
      ) : (
        <LoginForm submitResult={submitResult} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
