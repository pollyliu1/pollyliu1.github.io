import React from 'react'
import "./Home.css"
import { Box, Text, Heading } from '@chakra-ui/react';
import { motion } from "framer-motion"

class Home extends React.Component {
    render() {
        return(
            <Box className="home">
            {/* motion.div works like a normal div */}
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
                <Box className="home-container">

                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Heading className="intro" fontSize="6xl">Hi,</Heading>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Heading className="intro2" fontSize="7xl">I'm Polly Liu</Heading>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Text className="role" fontSize="">Software Engineer</Text>
                    </motion.div>

                </Box>
            </motion.div>
            </Box>
        )
    }
}

export default Home