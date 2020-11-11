import React from "react";

import axios from "axios";

import "./login.css";

import { LogIn } from "react-feather";

import { Link } from "react-router-dom";
import { Button, Input } from "@theme-ui/components";
import Loading from "../../components/loading";

import useSWR from "swr";

import { useForm } from "react-hook-form";

function Login() {
  const { data: image } = useSWR(
    "randomImage",
    async () => {
      const resp = await axios.post(
        process.env.REACT_APP_BACKEND_URL as string,
        {
          query: `
      {
        image: randomImage {
          url
          url_regular
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

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    console.log(
      (
        await axios.post(process.env.REACT_APP_BACKEND_URL as string, {
          query: `
      mutation($email: String!, $password: String!){
        token: createTokenByPassword(input: {email: $email, password: $password, client_type: web}) {
          token
          user {
            name
          }
        }
      }
      `,
          variables: {
            email,
            password,
          },
        })
      ).data
    );
  });

  return (
    <div
      className="loginPage page"
      style={{
        backgroundImage: `url(${image?.data?.image?.url_regular || ""})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <form className="loginForm" onSubmit={onSubmit}>
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
        <Input
          name="email"
          type="email"
          placeholder="Email"
          autoFocus
          ref={register}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          ref={register}
        />
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Signing In..." : "Sign In"}
        </Button>
        <div className="signUp">
          No account yet? <Link to="/signup">Sign up!</Link>
        </div>
      </form>

      {image ? (
        <div className="attribution">
          Photo by{" "}
          <a href={image.data.image.user.url}>{image.data.image.user.name}</a>{" "}
          on <a href={image.data.image.meta_url}>Unsplash</a>
        </div>
      ) : (
        <div className="attribution">Loading...</div>
      )}
    </div>
  );
}

export default Login;
