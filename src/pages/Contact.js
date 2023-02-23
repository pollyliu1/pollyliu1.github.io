import React from 'react'
import "./Contact.css"
import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import "../App.css";
import { motion } from "framer-motion"

function Contact() {
  return (
    <Box className="contact">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: {duration: 0.2}}}>
                <Heading className="contact-heading">
                        Contact Me!
                </Heading>
                <Flex className="contact-options">
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <Flex className="contact-icons">
                        <a className="email contact-icon" href="mailto: polly.liu@uwaterloo.ca"
                        target="_blank" rel="noreferrer">
                            <i class="far fa-envelope"></i>
                        </a>
                        <Text className="contact-text">&nbsp;Email</Text>
                        </Flex>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <Flex className="contact-icons">
                        <a className="github contact-icon" href="https://github.com/pollyliu1"
                        target="_blank" rel="noreferrer">
                            <i class="fab fa-github"></i>
                        </a>
                        <Text className="contact-text">&nbsp;GitHub</Text>
                        </Flex>
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}>
                        <Flex className="contact-icons">
                        <a className="linkedin contact-icon" href="https://www.linkedin.com/in/pollyliu1/"
                        target="_blank" rel="noreferrer">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <Text className="contact-text">&nbsp;LinkedIn</Text>
                        </Flex>
                    </motion.div>
                </Flex>
            </motion.div>
        </Box>
  )
}

export default Contact