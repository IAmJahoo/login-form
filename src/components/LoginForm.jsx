import React, { useState } from "react";

import PasswordCriteria from "./PasswordCriteria";

import { validateEmail, validatePassword } from "../utils/validators";
import { defineEmailClasses, definePasswordClasses } from "../utils/formClases";

import "../styles/loginForm.css";

export default function LoginForm({ handleSubmit, submitResult }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const updateEmail = (event) => {
    setIsEmailValid(validateEmail(event.target.value));
    setEmail(event.target.value);
  };

  const emailClasses = defineEmailClasses(isEmailValid);
  const passwordClasses = definePasswordClasses(isPasswordValid);

  const updatePassword = (event) => {
    setIsPasswordValid(validatePassword(event.target.value));
    setPassword(event.target.value);
  };

  return (
    <form
      method="POST"
      action="#"
      onSubmit={(e) => handleSubmit(e, email, password)}
    >
      {submitResult.result !== "" && (
        <section className="failure">{submitResult.message}</section>
      )}
      <fieldset>
        <label htmlFor="email" className={emailClasses.label}>
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className={emailClasses.input}
          placeholder="email@example.com"
          onChange={updateEmail}
          value={email}
        />
        <label htmlFor="password" className={passwordClasses.label}>
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className={passwordClasses.input}
          placeholder="Strong password..."
          onChange={updatePassword}
          value={password}
        />
        {isPasswordValid !== null && (
          <PasswordCriteria passwordValidation={isPasswordValid} />
        )}
        <span>
          <label htmlFor="remember">Remember me</label>
          <input type="checkbox" name="remember" id="remember" />
        </span>
        <input type="submit" value="Log in" />
      </fieldset>
    </form>
  );
}
