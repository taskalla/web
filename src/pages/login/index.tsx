import React from "react";

import axios from "axios";

import "./login.css";

import { LogIn } from "react-feather";

import { Link } from "react-router-dom";
import { Button, Input } from "@theme-ui/components";
import useSWR from "swr";

function Login() {
  const { data } = useSWR(
    "randomImage",
    async () => {
      const resp = await axios.post(
        process.env.REACT_APP_BACKEND_URL as string,
        {
          query: `
      {
        image: randomImage {
          url
          meta_url
          user {
            name
            url
          }
        }
      }
      `,
        }
      );

      return resp.data;
    },
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  return (
    <div
      className="loginPage page"
      style={{
        backgroundImage: `url(${data?.data?.image?.url || ""})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
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
        <Input type="email" placeholder="Email" autoFocus />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
        <div className="signUp">
          No account yet? <Link to="/signup">Sign up!</Link>
        </div>
      </form>

      {data && (
        <div className="attribution">
          Photo by{" "}
          <a href={data.data.image.user.url}>{data.data.image.user.name}</a> on{" "}
          <a href={data.data.image.meta_url}>Unsplash</a>
        </div>
      )}
    </div>
  );
}

export default Login;
