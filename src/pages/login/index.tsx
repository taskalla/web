import React from "react";

import "./login.css";

import { LogIn } from "react-feather";

import { Link, useHistory } from "react-router-dom";
import { Button, Input } from "@theme-ui/components";

import { useForm } from "react-hook-form";

import { gql, useMutation } from "@apollo/client";
import FormTemplate from "../templates/form";
import useToken from "../../lib/useToken";

function Login() {
  const [token, setToken] = useToken();
  const history = useHistory();

  const [signIn, { error: loginError }] = useMutation(gql`
    mutation signIn($email: String!, $password: String!) {
      token: createTokenByPassword(
        input: { email: $email, password: $password, client_type: web }
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
      setToken(resp.data.token.token);
      history.push("/app");
    } catch (e) {}
  });

  return (
    <FormTemplate onSubmit={onSubmit}>
      <div className="formHeader">
        <LogIn size={32} />
        <h3>Welcome</h3>
      </div>
      {loginError && <div className="error">Something went wrong.</div>}
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
        Sign In
      </Button>
      <div className="signUp">
        No account yet? <Link to="/signup">Sign up!</Link>
      </div>
    </FormTemplate>
  );
}

export default Login;
