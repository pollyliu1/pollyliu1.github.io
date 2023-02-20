import React from 'react';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes"
import Footer from "./components/Footer/Footer"
import { useLocation } from "react-router-dom"

// Note that BrowserRouter is already called in ./index.js
function App() {
  const location = useLocation();

  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {/* Import to override browser CSS for theming: */}
        <CSSReset />
        <Navbar />
        <AnimatedRoutes /> {/* Routing is in AnimatedRoutes.js */}
        {location.pathname !== '/contact' && <Footer />}
      </div>
    </ChakraProvider>
  );
}

export default App;
