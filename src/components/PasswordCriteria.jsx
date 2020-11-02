import React from "react";

import "../styles/validation.css";

export default function PasswordCriteria({ passwordValidation }) {
  const {
    hasValidLength,
    hasAtLeastOneLowercaseLetter,
    hasAtLeastOneUppercaseLetter,
    hasAtLeastOneNumber
  } = passwordValidation;

  return (
    <ul>
      <li className={hasValidLength ? "li-valid" : "li-invalid"}>
        Longer than 5 digits
      </li>
      <li className={hasAtLeastOneNumber ? "li-valid" : "li-invalid"}>
        At least one number
      </li>
      <li className={hasAtLeastOneUppercaseLetter ? "li-valid" : "li-invalid"}>
        At least one uppercase letter
      </li>
      <li className={hasAtLeastOneLowercaseLetter ? "li-valid" : "li-invalid"}>
        At least one lowercase letter
      </li>
    </ul>
  );
}
