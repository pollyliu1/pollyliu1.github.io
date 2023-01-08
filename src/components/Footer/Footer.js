import React from 'react'
import "./Footer.css"
import { Box, Flex } from '@chakra-ui/react';

class Footer extends React.Component {
    render() {
        return(
            <Box className="footer">
                <Flex className="icons">
                    <a className="email" href="mailto: pollyliu4@gmail.com"
                    target="_blank" rel="noreferrer">
                        <i class="far fa-envelope"></i>
                    </a>
                    <a className="github" href="https://github.com/pollyliu1"
                    target="_blank" rel="noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                    <a className="linkedin" href="https://www.linkedin.com/in/pollyliu1/"
                    target="_blank" rel="noreferrer">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </Flex>
                <Box className="copyright">
                    Copyright &copy; 2023 Polly Liu. All Rights Reserved
                </Box>
            </Box>
        )
    }
}

export default Footer