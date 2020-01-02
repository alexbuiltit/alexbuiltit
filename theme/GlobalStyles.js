import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    padding:0;
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    transition: all ease 300ms;
  }

  h1,h2,h3,h4,h5,h6{
    font-family: 'Playfair Display', serif;
    font-weight: 900;
  }
  p{
    font-size: 24px;
    line-height: 36px;
    color: #333;
    transition: all ease 300ms;
  }
  a{
    color: #2045D9;
    text-decoration: underline;
    transition: all ease 300ms;
  }

@media (prefers-color-scheme: dark) {
  body{
    background-color: #333;
  }
  a{
    color: #F6E564;
    &:focus {
      background-color: #760097;
      outline-color: #760097;
    }
  }
  p{
    color: #fff;
  }
}

`;

export default GlobalStyles;
