// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    
    --btn-primary: #1F986C;
    --btn-primary-hover: #24af7c;
    --btn-primary-active: #1c865f;
    --btn-primary-text: #F3F3F3;
    --btn-dim: #eeeeee;
    --btn-dim-hover: #dfdfdf;
    --btn-danger: #E42222;
    --btn-danger-hover: #fc3939;
    --btn-icon: #999999;
    --btn-icon-active: #1c855e;
    --btn-icon-hover: #1F986C;
    --btn-icon-hover-active: #24af7c;
    --btn-disabled: #e0e0e0;
    --btn-disabled-text: #575757;
  }

  body, html {
    overflow: hidden;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
    -moz-box-sizing: border-box;    /* Firefox, other Gecko */
    box-sizing: border-box;         /* Opera/IE 8+ */

    *:focus:not(:focus-visible) {
      outline: none;

    } 
    *:focus-visible {
      outline: 2px solid #25c087b9; border-radius: 15px;
      outline-offset: .1rem;
    }

    *::-moz-selection { /* Code for Firefox */
      background: #9e9e9e50;
   }

    *::selection {
     background: #9e9e9e50;
    }
  }

  p, h1, h2, h3, a, span, li, ul, button {
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
