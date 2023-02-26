import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
:root {
  --main-text-color: #353434;
  --second-text-color: #ffffff;
  --accent-text-color: #1ee64dfa;

  --main-bg-color: #ffffff;
  --second-bg-color: #353434;
  --accent-bg-color: #1ee64dfa;

  --main-hover-animation: 250ms linear;
}

body {
  margin: 0;
  padding: 0;

  background-color: var(--main-bg-color);
  color: var(--main-text-color);

  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  padding: 0;
}
`;
