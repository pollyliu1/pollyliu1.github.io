import React from 'react';
import { ChakraProvider, theme, CSSReset } from '@chakra-ui/react';
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Footer from "./components/Footer/Footer"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        {/* Import to override browser CSS for theming */}
        <CSSReset />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
