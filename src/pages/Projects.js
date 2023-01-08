import React from 'react'
import "./Projects.css"
import {
    Box,
    Flex,
    Heading,
    Card,
    CardBody,
    CardFooter,
    Text,
    Image,
    Stack,
    Divider } from '@chakra-ui/react'
// Box renders a div by default


class Projects extends React.Component {
    render() {
        return(
            <Flex className="projects">
                <Card className="card uwstream" maxW='sm'>
                    <CardBody>
                        <Image
                        src='under_construction.png'
                        alt='under construction image'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>UWStream</Heading>
                        <Text>
                            Visual co-op sequences for University of Waterloo students
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Box className="gh-icons">
                            <a href="https://github.com/pollyliu1/UWStream" target="_blank"><i class="fab fa-github"></i></a>
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
                        <Heading size='md'>Zooveniers</Heading>
                        <Text>
                            Zookeeper game made with Unity (WIP)
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Box className="gh-icons">
                            <a href="https://github.com/pollyliu1/Zooveniers" target="_blank"><i class="fab fa-github"></i></a>
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
                        <Heading size='md'>Personal Website</Heading>
                        <Text>
                            View the source code behind this website :)
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Box className="gh-icons">
                            <a href="https://github.com/pollyliu1/pollyliu1.github.io" target="_blank"><i class="fab fa-github"></i></a>
                        </Box>
                    </CardFooter>
                </Card>
            </Flex>
        )
    }
}

export default Projects