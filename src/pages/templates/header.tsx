import React, { FunctionComponent } from "react";

import Header from "../../components/header";

const HeaderTemplate: FunctionComponent = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default HeaderTemplate;
