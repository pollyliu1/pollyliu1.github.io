import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Body from "./components/Body/Body"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Body />
      </div>
    </ChakraProvider>
  );
}

export default App;
