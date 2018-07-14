import React, { Component } from "react";
import LoginForm from "./components/LoginForm";

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Log In</h2>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
