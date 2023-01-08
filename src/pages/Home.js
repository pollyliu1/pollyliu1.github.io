import React from 'react'
import "./Home.css"
import { Box, Text } from '@chakra-ui/react';

class Home extends React.Component {
    render() {
        return(
            <Box className="home">
                <Box className="text-container">
                    <Text className="text">Hi, I'm Polly</Text>
                    <Text className="text">Software Engineer</Text>
                </Box>
            </Box>
        )
    }
}

export default Home