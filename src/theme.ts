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
      transition: "400ms all",
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
};

export default theme;

// input {
//   background: rgba(34, 34, 34, 0.9);
//   border: none;
//   border-radius: 5px;
//   padding: 10px;
//   font-size: 18px;
//   color: white;
//   caret-color: #9c9c9c;

//   transition: 200ms box-shadow;
// }

// input:focus {
//   box-shadow: 0px 0px 0px 3px var(--primary);
//   outline: none;
// }

// input:invalid:not(:focus) {
//   outline: none;
//   box-shadow: 0px 0px 0px 3px rgb(255, 50, 50);
// }

// ::placeholder {
//   color: #9c9c9c;
// }
