import React from 'react'
import "./Footer.css"
import { Box, Flex } from '@chakra-ui/react'
import { motion } from "framer-motion"

function Footer() {
    return(
        <Box className="footer">
            <Flex className="icons">
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                    <a className="email footer-icon" href="mailto: polly.liu@uwaterloo.ca"
                    target="_blank" rel="noreferrer">
                        <i class="far fa-envelope"></i>
                    </a>
                </motion.div>
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                    <a className="github footer-icon" href="https://github.com/pollyliu1"
                    target="_blank" rel="noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                </motion.div>
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}>
                    <a className="linkedin footer-icon" href="https://www.linkedin.com/in/pollyliu1/"
                    target="_blank" rel="noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </motion.div>
            </Flex>
            <Box className="copyright">
                Copyright &copy; 2024 Polly Liu. All Rights Reserved
            </Box>
        </Box>
    )
}

export default Footer