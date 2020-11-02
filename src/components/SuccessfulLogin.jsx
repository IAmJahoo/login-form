import React from "react";
import "../styles/success.css";

export default function SuccesfulLogin({ message }) {
  return <section className="success">{message}</section>;
}
