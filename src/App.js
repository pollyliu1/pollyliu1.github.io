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
import { Logo } from './Logo';
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>
        <Navbar />
      </div>
    </ChakraProvider>
  );
}

export default App;
