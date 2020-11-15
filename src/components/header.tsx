import React, { FunctionComponent } from "react";
import { Button } from "theme-ui";
import header from "./header.module.css";

import { LogOut } from "react-feather";

const Header: FunctionComponent = () => {
  return (
    <div className={header.header}>
      <Button className={header.signInOut} variant="primary">
        <LogOut size={24} style={{ transform: "translateY(3px)" }} />
      </Button>
    </div>
  );
};

export default Header;
