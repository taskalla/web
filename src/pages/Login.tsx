import React from "react";

import "./login.css";

import { LogIn } from "react-feather";

import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="loginPage page"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1538639829611-b3e1e33a9daf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4MDk4OH0)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <form className="loginForm">
        <div className="loginFormHeader">
          <LogIn size={32} />
          <h3
            style={{
              marginLeft: "10px",
            }}
          >
            Welcome
          </h3>
        </div>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign In</button>
        <div className="signUp">
          No account yet? <Link to="/signup">Sign up!</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
