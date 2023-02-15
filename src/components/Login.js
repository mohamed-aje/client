import React, { useState } from "react";
import { useLocalState } from "../utils/useLocalStorage";
import "../styles/login.css";
const Login = () => {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password };
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      const token = localStorage.getItem("token", parseRes.token);
      setJwt(token);
      window.location.href = "/recipes";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div className="sidenav">
        <div className="login-main-text">
          <h2>
            Application
            <br /> Login Page
          </h2>
          <p>Login or register from here to access the </p>
        </div>
      </div>
      <div className="main">
        <div className="col-md-6 col-sm-12">
          <div className="login-form">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control my-3"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control my-3"
            />

            <button className="btn btn-success btn-block">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Login;
