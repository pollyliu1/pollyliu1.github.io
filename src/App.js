import React from 'react';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes"
import Footer from "./components/Footer/Footer"

// Note that BrowserRouter is already called in ./index.js
function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {/* Import to override browser CSS for theming: */}
        <CSSReset />
        <Navbar />
        <AnimatedRoutes /> {/* Routing is in AnimatedRoutes.js */}
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
