import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Londrina Solid';
    src: url('/LondrinaSolid-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: 'Fresca';
    src: url('/Fresca-Regular.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Fresca', sans-serif;
    color: var(--ink);
    background: var(--paper);
    scroll-behavior: smooth;
  }

  :root {
    --ink: #102c50;
    --forest: #176084;
    --paper: #eff7fd;
    --paper-deep: #dcecf7;
    --muted: #54748a;
    --line: #c1d6e7;
    --coral: #287bc4;
    --lime: #a4e6f5;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Londrina Solid', cursive;
    color: inherit;
    line-height: 1;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    display: block;
    max-width: 100%;
  }

  button, a {
    -webkit-tap-highlight-color: transparent;
  }

  * {
    box-sizing: border-box;
  }
`
