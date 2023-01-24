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

function Projects() {
    return(
        <Box className="background">
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
            <Card className="card empowrher" maxW='sm'>
                <CardBody>
                    <Image
                    src='EmpowrHER.png'
                    alt='empowrher homepage'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Text className="headers" size='md'>EmpowrHER</Text>
                    <Text>
                        Skill trading web app for women in STEM
                        <br></br>
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Box className="gh-icons">
                        <a href="https://github.com/pollyliu1/EmpowrHER"
                        target="_blank" rel="noreferrer">
                            <i class="fab fa-github"></i>
                        </a>
                    </Box>
                </CardFooter>
            </Card>
            <Card className="card website" maxW='sm'>
                <CardBody>
                    <Image
                    src='Logo16by9.png'
                    alt='personal website logo'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Text className="headers" size='md'>Personal Website</Text>
                    <Text>
                        View the source code behind this website :)
                        <br></br>
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
            <Card className="card cipher" maxW='sm'>
                <CardBody>
                    <Image
                    src='Cipher.png'
                    alt='cipher.exe logo'
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Text className="headers" size='md'>Cipher.exe</Text>
                    <Text>
                        Cryptography program that encrypts plaintext and decrypts ciphertext
                        <br></br>
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Box className="gh-icons">
                        <a href="https://github.com/pollyliu1/Cipher.exe"
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
                        <br></br>
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
        </Flex>
        </motion.div>
        </Box>
    )
}

export default Projects