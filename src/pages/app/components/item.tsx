import React, { FunctionComponent } from "react";
import { Card } from "theme-ui";

import { CheckSquare, Square } from "react-feather";

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
        width: "40%",
        textAlign: "left",
        fontSize: "20px",
      }}
    >
      {description}
      {done ? <CheckSquare /> : <Square />}
    </Card>
  );
};

export default Item;
