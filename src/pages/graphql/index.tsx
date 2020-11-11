import React from "react";
import { Playground } from "graphql-playground-react";

function GraphQL() {
  return <Playground endpoint={process.env.REACT_APP_BACKEND_URL} />;
}

export default GraphQL;
