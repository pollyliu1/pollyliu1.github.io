import React from 'react'
import "./About.css"
import { Box, Flex, Image } from '@chakra-ui/react';
import "../App.css";

class About extends React.Component {
    render() {
        return(
            <Box className="about">
                <Flex className="headshot-container">
                    <Image className="headshot"
                    src="headshot.png" fallbackSrc="https://via.placeholder.com/1920x1080"
                    boxShadow="dark-lg" rounded="lg"
                    />
                </Flex>
            </Box>
        )
    }
}

export default About