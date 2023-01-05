import React from 'react'
import "./Projects.css"
import { Box } from '@chakra-ui/react';
// Box renders a div by default

class Projects extends React.Component {
    render() {
        return(
            <Box className="projects">
                <h1>Projects</h1>
                <h2>hi</h2>
                <Box color="pink.500" className="box">Box</Box>
            </Box>
        )
    }
}

export default Projects