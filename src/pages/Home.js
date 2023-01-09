import React from 'react'
import "./Home.css"
import { Box, Text } from '@chakra-ui/react';
import { motion } from "framer-motion"

class Home extends React.Component {
    render() {
        return(
            // motion.div works like a normal div
            <motion.div className="home"
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
                <Box className="text-container">
                    <Text className="text">Hi, I'm Polly</Text>
                    <Text className="text">Software Engineer</Text>
                </Box>
            </motion.div>
        )
    }
}

export default Home