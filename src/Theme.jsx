/* eslint-disable react/prop-types */
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#000",
    secondary: "#FF6452",
    white: "#fff",
    body: "#f6f5f5",
  },
  fontSize: {
    small: "18px",
    normal: "20px",
    medium: "25px",
    large: "40px",
    xl: "60px",
  },
  fontWeight: {
    light: "300",
    Regular: "400",
    medium: "500",
    extraBold: "900",
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
