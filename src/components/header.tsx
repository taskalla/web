import React, { FunctionComponent } from "react";
import { Button } from "theme-ui";
import header from "./header.module.css";

import { LogOut } from "react-feather";
import useToken from "../lib/useToken";
import { useHistory } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

const Header: FunctionComponent = () => {
  const [, setToken] = useToken();
  const history = useHistory();

  const { data } = useQuery(gql`
    {
      viewer {
        gravatar(size: 64)
        name
        id
      }
    }
  `);

  return (
    <div className={header.header}>
      {data && <img className={header.avatar} src={data.viewer.gravatar} />}
    </div>
  );
};

export default Header;
