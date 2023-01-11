import React from 'react'
import "./Home.css"
import { Box, Flex, Heading, Image } from '@chakra-ui/react';
import { motion } from "framer-motion"
import Typewriter from "typewriter-effect"

function Home() {
    return(
        <Box className="home">
        {/* motion.div works like a normal div,
         this is the page transition: */}
        <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100vw" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
            <Flex className="page-container">
                <Box className="home-container">

                    <motion.div className="hi-container"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Heading className="hi" fontSize="5xl">Hi,</Heading>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Heading className="intro" fontSize="7xl">I'm Polly <span style={{color: "#394d55"}}>Liu</span></Heading>
                    </motion.div>

                    <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.5,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                        <Box className="typewriter">
                            <Typewriter
                            options={{
                                autoStart: true,
                                loop: true,
                                delay: 40,
                                cursorClassName: 'cursorSize',
                                strings:[
                                    "Software Engineer",
                                    "Video Game Enthusiast",
                                    "Tech Lover"
                                ]}}>
                            </Typewriter>
                        </Box>
                    </motion.div>

                </Box>

            <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{ delay: 2 }}
            >
                <Image className="logo" src="Logo.png" />
            </motion.div>
            </Flex>
        </motion.div>
        </Box>
    )
    }

export default Home