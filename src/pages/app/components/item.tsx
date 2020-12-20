import React, { FunctionComponent, useState } from "react";
import { Card } from "theme-ui";

import { CheckSquare, MoreVertical, Square } from "react-feather";

const Item: FunctionComponent<{ description: string; done: boolean, onCheckboxClick?: () => void }> = ({
  description,
  done,
  onCheckboxClick,
  ...props
}) => {
  const [overflow, setOverflow] = useState(false);

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
        <div onClick={() => onCheckboxClick && onCheckboxClick()}>{done ? <CheckSquare /> : <Square />}</div> <div style={{
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          marginLeft: 10,
        }} onClick={() => setOverflow(!overflow)}><MoreVertical /></div>
      </div>
    </Card>
  );
};

export default Item;
