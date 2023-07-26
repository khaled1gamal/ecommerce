import Header2 from "./components/header/Header2";
import Header1 from "./components/header/Header1";
import Header3 from "./components/header/Header3";
import Hero from "./components/hero/Hero";
import IconSec from "./components/icon/IconSec";
import MainPro from "./components/main/MainPro";
import Footer from "./components/footer/Footer";
import ScrollTop from "./components/btnScroll/ScrollTop";

import { CssBaseline,  ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />
        <Header1 />
        <Header2 />
        <Header3 />
        <Hero />
        <IconSec />
        <MainPro />
        <Footer />
        <ScrollTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
