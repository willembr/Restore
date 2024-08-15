import Catalog from "../../features/catalog/catalog";
import { CssBaseline, Container, createTheme, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? 'dark' : 'light';

  function ToggleMe() : void {
    setDarkMode(!darkMode)
  }

  const theme = createTheme({
    palette:{
      mode:paletteType,
      background : {
        default : !darkMode ?'#eaeaea' : '#121212'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header toggleMe={ToggleMe} darkMode={darkMode}/>
      <Container>
        <Catalog/>
      </Container>
    </ThemeProvider>
  );
}

export default App
