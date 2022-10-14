import React from "react";

const handleRegister = (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;
  console.log(email, password);
};

const handleEmailChange = (e) => {
  console.log(e.target.value);
};
const handlepassBlur = (e) => {
  console.log(e.target.value);
};
const Register = () => {
  return (
    <div>
      <form onSubmit={handleRegister}>
        <input onChange={handleEmailChange} type="email" name="email" id="" />{" "}
        <br />
        <input
          onBlur={handlepassBlur}
          type="password"
          name="password"
          id=""
        />{" "}
        <br />
        <button type="submit">Register </button>
      </form>
    </div>
  );
};

export default Register;
