import React, { FunctionComponent } from "react";
import { Card } from "theme-ui";

import { CheckSquare, MoreVertical, Square } from "react-feather";

const Item: FunctionComponent<{ description: string; done: boolean }> = ({
  description,
  done,
  ...props
}) => {
  return (
    <Card
      {...props}
      sx={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "10px",
        margin: "10px auto",
        textAlign: "left",
        fontSize: "20px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {description}
      <div
        style={{
          marginLeft: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        {done ? <CheckSquare /> : <Square />} <MoreVertical />
      </div>
    </Card>
  );
};

export default Item;
