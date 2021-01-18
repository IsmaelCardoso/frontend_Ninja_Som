import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #FFFFFF;
  -webkit-font-smoothing: analiased;
}

body, input, button, span, strong {
  font-family: Lato, sans-serif;
  font-size: 14px;
  color: #041E50;
  font-weight: 400;
  letter-spacing: 0.6px;
}

#root {
  margin: 0 auto;
}

button {
  cursor: pointer;
}
`
