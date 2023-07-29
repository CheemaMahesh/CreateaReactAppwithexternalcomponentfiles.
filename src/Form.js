import React, { useState } from "react";
import HomePage from "./HomePage";
import { name, email } from "./HomePage";

const stops = (e) => {
  e.preventDefault();
  console.log("mahesh", name, email);
};

const Form = () => {
  const [nameValue, setNameValue] = useState(name);
  const [emailValue, setEmailValue] = useState(email);

  return (
    <>
      <div>
        <form onSubmit={stops}>
          {/* Create a h3, 2 inputs and 1 button here */}
          <h3>Login Page</h3>
          <input
            placeholder="YourName"
            defaultValue={nameValue}
            onChange={(e) => setNameValue(e.target.value)}
          />
          <input
            placeholder="xyz@pqr.com"
            defaultValue={emailValue}
            onChange={(e) => setEmailValue(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </>
  );
};

export default Form;
