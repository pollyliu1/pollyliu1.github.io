import React from 'react'
import "./About.css"
import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';
import "../App.css";
import { motion } from "framer-motion"

class About extends React.Component {
    render() {
        return(
            <Box className="about">
                <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100vw" }}
                exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
                    <Flex className="headshot-container">
                        <Image className="headshot" src="headshot.png"
                        boxShadow="dark-lg" rounded="lg" />
                    </Flex>
                    <Flex className="text-container">
                        <Heading className="heading text">
                            Hello!
                        </Heading>
                        <Text className="text">
                            My name is Polly Liu and I am a first-year Computer Science student at the University of Waterloo.
                        </Text>
                    </Flex>
                </motion.div>
            </Box>
        )
    }
}

export default About