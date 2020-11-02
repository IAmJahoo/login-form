import React, { useState } from "react";

import SuccesfulLogin from "./components/SuccessfulLogin";
import LoginForm from "./components/LoginForm";
import { handleFormSubmit } from "./utils/handleFormSubmit";

import "./styles.css";
import "./styles/validation.css";

export default function App() {
  const [submitResult, setSubmitResult] = useState({
    result: "",
    message: ""
  });

  const handleSubmit = (event, email, password) => {
    event.preventDefault();
    setSubmitResult(handleFormSubmit(email, password));
  };

  return (
    <div className="App">
      {submitResult.result === "success" ? (
        <SuccesfulLogin message={submitResult.message} />
      ) : (
        <LoginForm submitResult={submitResult} handleSubmit={handleSubmit} />
      )}
    </div>
  );
}
