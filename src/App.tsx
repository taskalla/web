import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Index from "./pages/index";
import GraphQL from "./pages/graphql";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Index />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          <Route path="/graphql" exact>
            <GraphQL />
          </Route>
          <Route path="">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
