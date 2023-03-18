// globalStyles.js
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --btn-primary: #1F986C;
    --btn-primary-text: #F3F3F3;
    --btn-dim: #E2FFF5;
    --btn-danger: #E42222;
    --btn-icon: #999999;
    --btn-icon-active: #2C2C2C;
    --btn-nav_icon: #252525;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */
  }
`

export default GlobalStyle
