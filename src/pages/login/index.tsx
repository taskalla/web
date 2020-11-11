import React from "react";

import "./login.css";

import { LogIn } from "react-feather";

import { Link } from "react-router-dom";
import { Button, Input } from "@theme-ui/components";

import { useForm } from "react-hook-form";

import { useQuery, gql, useMutation } from "@apollo/client";

function Login() {
  const {
    loading: imageLoading,
    data: image,
    error: imageError,
  } = useQuery(gql`
    {
      image: randomImage {
        url_full
        url_regular
        meta_url
        user {
          url
          name
        }
      }
    }
  `);

  const [signIn, { error: loginInError }] = useMutation(gql`
    mutation signIn($email: String!, $password: String!) {
      token: createTokenByPassword(
        input: { email: $email, password: $password }
      ) {
        token
        user {
          name
        }
      }
    }
  `);

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<{
    email: string;
    password: string;
  }>();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const resp = await signIn({
        variables: {
          email,
          password,
        },
      });
      alert(resp.data.token.token);
    } catch (e) {}
  });

  return (
    <div
      className="loginPage page"
      style={{
        backgroundImage: `url(${image?.image?.url_regular || ""})`,
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
          {loginInError && "error"}
        </div>
      </form>

      {imageLoading ? (
        <div className="attribution">Loading...</div>
      ) : (
        !imageError && (
          <div className="attribution">
            Photo by <a href={image.image.user.url}>{image.image.user.name}</a>{" "}
            on <a href={image.image.meta_url}>Unsplash</a>
          </div>
        )
      )}
    </div>
  );
}

export default Login;
