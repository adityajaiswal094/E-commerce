import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
}

h2{
    color: ${({ theme }) => theme.colors.heading};
    font-size: 4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
}

h3{
    font-size: 1.8rem;
    font-weight: 400;
}

p, button {
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.7;
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight: 400;
}

a {
    text-decoration: none;
}

// body {
//     overflow-x: hidden;
//     scrollbar-color: rgb(98 84 243);
//     scrollbar-width: thin;
// }
`;