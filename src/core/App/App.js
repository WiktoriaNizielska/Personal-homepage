import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { PersonalHomepage } from "../../features/PersonalHomepage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PersonalHomepage />
    </ThemeProvider>
  );
}

export default App;
