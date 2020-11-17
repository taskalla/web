import React, { FunctionComponent } from "react";
import { Card } from "theme-ui";

const Item: FunctionComponent<{ description: string }> = ({
  description,
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
    </Card>
  );
};

export default Item;
