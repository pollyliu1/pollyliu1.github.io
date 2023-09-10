import React from 'react'
import "./About.css"
import { Box, Flex, Image, Text, Heading } from '@chakra-ui/react';
import "../App.css";
import { motion } from "framer-motion"
import { Carousel } from "../components/AboutCarousel/Carousel"
import { frisbee } from "../components/AboutCarousel/FrisbeeCarouselData"
import { music } from "../components/AboutCarousel/MusicCarouselData"

function About() {
    return (
        <Box className="about-page-container">
        
        <Box className="about-landing">
            <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100vw" }}
            exit={{ x: window.innerWidth, transition: {duration: 0.2} }}>
                <Flex className="headshot-container">
                    <Image className="headshot"
                        src="headshot.png"
                        boxShadow="dark-lg"
                        rounded="lg" />
                </Flex>
            </motion.div>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition:{
                duration: 1.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}}>
                <Flex className="intro-container">
                    <Heading className="heading">
                        Hello!
                    </Heading>
                    <Text className="text">
                        My name is Polly Liu and I'm a second-year Computer Science student at the University of Waterloo. I'm passionate about
                        the tech industry and I'm always looking for opportunities to learn and grow as a developer!
                    </Text>
                </Flex>
            </motion.div>
            
        </Box>

        {/* Curvy div */}
        <Box className="wavy-div">
            <div class="wave">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
                </svg>
            </div>
        </Box>

        <Box className="about-info">
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition:{
                duration: 1.5,
                delay: 0.4,
                ease: [0, 0.71, 0.2, 1.01]
            }}}>
                <Heading className="heading-interest" /* data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-once='true' */>Interests</Heading>
            </motion.div>
            <Flex className="interests-container">
                <Flex className="interest">
                    <Carousel data={frisbee} className="carousel" />
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: {
                            duration: 1.5,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}}
                        className="interest-text-container" /* data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-once='true' */>
                        <span>
                            <Heading className="interest-heading">
                                Ultimate Frisbee 🥏
                            </Heading>
                        </span>
                        <Text className="text">
                            I've been playing frisbee since primary school and it's developed to be a huge part of my life.
                            I really love the community that frisbee fosters as well as the unique teamwork you build.
                            It's a great way to stay active amidst university!
                        </Text>
                    </motion.div>
                </Flex>
            </Flex>
            <Flex className="interests-container">
                <Flex className="interest">
                    <Carousel data={music} className="carousel"/>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1, transition: {
                            duration: 1.5,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}}
                        className="interest-text-container" /* data-aos="fade-left" data-aos-anchor-placement="top-bottom" data-aos-duration="1000" data-aos-once='true' */>
                        <span>
                            <Heading className="interest-heading">
                                Instrumental Music 🎼
                            </Heading>
                        </span>
                        <Text className="text">
                            Playing music is the one thing that will improve my mood without fail.
                            I've had the opportunity to play in diverse ensembles, including orchestras, concert, jazz, and military bands!
                            I'm super grateful that these experiences allow me to develop myself in areas outside of tech.
                        </Text>
                    </motion.div>
                </Flex>
            </Flex>
        </Box>

        </Box>
    )
}

export default About