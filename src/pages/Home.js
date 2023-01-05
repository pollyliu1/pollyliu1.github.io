import React from 'react'
import "./Home.css"
import { Box } from '@chakra-ui/react';

class Home extends React.Component {
    render() {
        return(
            <Box className="home">
                <h1 className="welcome">Welcome</h1>
                <h2>Hi</h2>
            </Box>
        )
    }
}

export default Home