import React from "react";
import { Redirect, Link } from "react-router-dom";
import { Button } from "theme-ui";
import useToken from "../../lib/useToken";

export default function Index() {
  const [token] = useToken();

  if (token) {
    return <Redirect to="/app" />;
  }

  return (
    <div>
      <Link to="/login">
        <Button>Sign in</Button>
      </Link>
    </div>
  );
}
