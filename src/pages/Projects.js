import React from 'react'
import "./Projects.css"
import {
    Box,
    Flex,
    Card,
    CardBody,
    CardFooter,
    Text,
    Image,
    Stack,
    Divider } from '@chakra-ui/react'
// Box renders a div by default
import { motion } from "framer-motion"

class Projects extends React.Component {
    render() {
        return(
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100vw" }}
                exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
            <Flex className="projects">
                <Card className="card uwstream" maxW='sm'>
                    <CardBody>
                        <Image
                        src='under_construction.png'
                        alt='under construction image'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Text className="headers" size='md'>UWStream</Text>
                        <Text>
                            Visual co-op sequences for University of Waterloo students
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Box className="gh-icons">
                            <a href="https://github.com/pollyliu1/UWStream"
                            target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </Box>
                    </CardFooter>
                </Card>
                <Card className="card zooveniers" maxW='sm'>
                    <CardBody>
                        <Image
                        src='under_construction.png'
                        alt='under construction image'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Text className="headers" size='md'>Zooveniers</Text>
                        <Text>
                            Zookeeper game made with Unity (WIP)
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Box className="gh-icons">
                            <a href="https://github.com/pollyliu1/Zooveniers"
                            target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </Box>
                    </CardFooter>
                </Card>
                <Card className="card website" maxW='sm'>
                    <CardBody>
                        <Image
                        src='under_construction.png'
                        alt='under construction image'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Text className="headers" size='md'>Personal Website</Text>
                        <Text>
                            View the source code behind this website :)
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Box className="gh-icons">
                            <a href="https://github.com/pollyliu1/pollyliu1.github.io"
                            target="_blank" rel="noreferrer">
                                <i class="fab fa-github"></i>
                            </a>
                        </Box>
                    </CardFooter>
                </Card>
            </Flex>
            </motion.div>
        )
    }
}

export default Projects