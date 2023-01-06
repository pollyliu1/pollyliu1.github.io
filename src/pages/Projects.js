import React from 'react'
import "./Projects.css"
import {
    Box,
    Flex,
    Heading,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Text,
    Image,
    Stack,
    Button,
    ButtonGroup,
    Divider } from '@chakra-ui/react'
// Box renders a div by default


class Projects extends React.Component {
    render() {
        return(
            <Flex className="projects">
                <Card className="card uwstream" maxW='sm'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>UWStream</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card className="card zooveniers" maxW='sm'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Zooveniers</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
                <Card className="card website" maxW='sm'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Personal Website</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button>
                        <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Flex>
        )
    }
}

export default Projects