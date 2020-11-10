import { ThemeProvider } from "theme-ui";
import { Theme } from "theme-ui";

const theme: Theme = {
  fonts: {
    body: '"Open Sans", sans-serif',
    heading: "Jost, sans-serif",
  },
  colors: {
    text: "#fff",
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
      transition: "200ms all",
    },
  },
};

export default theme;

// background-color: var(--primary);
//   border-radius: 5px;
//   border: none;
//   color: white;
//   font-weight: bold;
//   cursor: pointer;
//   font-size: 18px;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   padding: 10px 20px;

//   transition: 200ms all;
