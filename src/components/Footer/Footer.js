import React from 'react'
import "./Footer.css"
import { Box } from '@chakra-ui/react';

class Footer extends React.Component {
    render() {
        return(
            <div className="footer">
                <Box className="box"> Copyright &copy; 2023 Polly Liu. All Rights Reserved</Box>
            </div>
        )
    }
}

export default Footer