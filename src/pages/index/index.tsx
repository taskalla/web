import React from "react";
import { Redirect } from "react-router-dom";
import useToken from "../../lib/useToken";

export default function Index() {
  const [token] = useToken();

  if (token) {
    return <Redirect to="/app" />;
  }

  return <div>{"no token"}</div>;
}
