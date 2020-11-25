import { Theme } from "theme-ui";

const theme: Theme = {
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: "Jost, sans-serif",
  },
  colors: {
    text: "#ddd",
    background: "#000",
    primary: "#28afb0",
  },
  buttons: {
    primary: {
      backgroundColor: "primary",
      borderRadius: "5px",
      border: "none",
      color: "white",
      textTransform: "uppercase",
      cursor: "pointer",
      fontWeight: "bold",
      fontSize: "18px",
      letterSpacing: "0.1em",
      padding: "10px 20px",
      transition: "400ms all",
      "&:disabled": {
        opacity: 0.5,
      },
      "&:focus": {
        outline: "none",
      },
    },
  },
  forms: {
    input: {
      background: "rgba(34, 34, 34, 0.8)",
      border: "none",
      borderRadius: "5px",
      padding: "10px",
      fontSize: "18px",
      color: "text",
      caretColor: "#9c9c9c",
      transition: "200ms box-shadow",
      "&:focus": {
        boxShadow: "0px 0px 0px 3px var(--primary)",
        outline: "none",
      },
      "&::placeholder": {
        color: "#9c9c9c",
      },
    },
  },
  styles: {
    root: {
      color: "text",
      backgroundColor: "background",
      textAlign: "center",
    },
  },
};

export default theme;
