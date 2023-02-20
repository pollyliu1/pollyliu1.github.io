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
                        Contact Me:
                </Heading>
                <Flex className="">
                </Flex>
            </motion.div>
        </Box>
  )
}

export default Contact