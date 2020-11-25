import React, { CSSProperties } from "react";
import { CheckSquare, Square } from "react-feather";

const switchItemStyles = (selected: boolean): CSSProperties => ({
  fontSize: "15px",
  color: selected ? "white" : "gray",
  margin: "0 15px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  fontWeight: "bold",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
});

const switchIconStyles: CSSProperties = {
  marginLeft: "5px",
};

export default function FilterSwitch({
  onChange,
  selected,
}: {
  onChange: (selected: "todo" | "done") => void;
  selected: "todo" | "done";
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",
      }}
    >
      <div
        style={switchItemStyles(selected == "todo")}
        onClick={() => onChange("todo")}
      >
        To Do <Square style={switchIconStyles} size={20} />
      </div>
      <div
        style={switchItemStyles(selected == "done")}
        onClick={() => onChange("done")}
      >
        Done <CheckSquare style={switchIconStyles} size={20} />
      </div>
    </div>
  );
}
