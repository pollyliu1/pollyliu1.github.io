import React from 'react'
import "./About.css"
import { Box, Flex, Image } from '@chakra-ui/react';
import "../App.css";

class About extends React.Component {
    render() {
        return(
            <Box className="about">
                <Flex className="headshot-container">
                    <Image className="headshot" src="headshot.png"
                    boxShadow="dark-lg" rounded="lg" />
                </Flex>
                
            </Box>
        )
    }
}

export default About