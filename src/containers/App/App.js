import { ThemeProvider } from "styled-components";

import FXLanding from "containers/FXLanding";

import { theme } from "./";

/**
 * App
 * Intial App setup
 */
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <FXLanding />
    </ThemeProvider>
  );
};

export default App;
