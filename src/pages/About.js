import React from 'react'
import "./About.css"
import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';
import "../App.css";
import { motion } from "framer-motion"

function About() {
    return (
        <Box className="about">
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ x: window.innerWidth, transition: {duration: 0.2} }}>
                <Flex className="headshot-container">
                    <Image className="headshot" src="headshot.png"
                    boxShadow="dark-lg" rounded="lg" />
                </Flex>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition:{
                duration: 1.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}}>
                <Flex className="intro-container">
                    <Heading className="heading text">
                        Hello!
                    </Heading>
                    <Text className="text">
                        My name is Polly Liu and I'm a first-year Computer Science student at the University of Waterloo.
                    </Text>
                </Flex>
            </motion.div>
        </Box>
    )
}

export default About