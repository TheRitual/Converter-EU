import { createGlobalStyle } from "styled-components";
import backgroundImage from "./img/doodle.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
    }

    *, ::after, ::before {
        box-sizing: inherit;
        -webkit-font-smoothing: inherit;
    }

    body {
        font-family: 'Dela Gothic One', cursive;
        background-color: #305278;
        background-image: url(${backgroundImage});
        background-size: 750px;
        background-attachment: fixed;
        background-position: top;
    }

    a {
        text-decoration: none;
    }
`;