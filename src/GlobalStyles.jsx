import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: poppins,sans-serif;
        width: 100%;
        min-height: 100vh;
        padding-top: 70px;
        background-color: ${(props) => props.theme.colors.body};
        text-transform: capitalize;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.white};
    }

    ul {
        list-style: none;
    }

    span {
        color: ${(props) => props.theme.colors.secondary};
    }
`;

export default GlobalStyles;
