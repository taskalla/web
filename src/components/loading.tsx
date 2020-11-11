import React, { FunctionComponent } from "react";

import { useThemeUI } from "theme-ui";

const Loading: FunctionComponent<{ text: string }> = ({ text, ...props }) => {
  const {
    theme: { colors },
  } = useThemeUI();
  return (
    <div
      {...props}
      style={{
        color: "white",
        fontSize: "20px",
        letterSpacing: "0.1em",
        fontWeight: "bold",
        textTransform: "uppercase",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>{text}</div>
    </div>
  );
};

export default Loading;
