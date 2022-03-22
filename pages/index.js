import NexLink from 'next/link'
import { 
    Container,
    Box, 
    Center, 
    Heading , 
    Image,
    useColorModeValue,
    SimpleGrid,
    Link,
    Button,
    List,
    Icon,
    ListItem} 
    from "@chakra-ui/react"
import Section from "../components/section"
import Layout from '../components/layouts/article'
import Paragraph from "../components/paragraph"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem } from '../components/grid-item'
import {
    IoLogoGithub,
    IoLogoFacebook
}
from 'react-icons/io5'

const Page = () => {
    return ( 
        <Container>
            <Box borderRadius="lg" bg = {useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p ={3}  mb={6} align="center">
                Hello I'm a student of Hust.
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-tittle">
                        Khang Hoang
                    </Heading>
                    <p>(Developer / Guitarist / Freelancer)</p>
                </Box>
            <Box flexShrink={0} 
            mt={{base: 4, md: 0}} 
            ml={{md: 6}} 
            align="center">
                <Image boderColor="whiteAlpha.800"
                        boderWidth={2}
                        boderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="https://scontent.fhan3-5.fna.fbcdn.net/v/t1.6435-9/164495857_1154235391693355_2515783179517803957_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=DFWgIDReDUYAX9BvIXV&_nc_ht=scontent.fhan3-5.fna&oh=00_AT8ASHoP2tGMYiqEBAIDdXiNm7FOW4U8Hc0-u5ujedDnDQ&oe=625869EF"
                        alt="Profile Image"
                />
            </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>I'm from Viet Nam .
                    I'm live in HaNoi and  trying to learn build a webite for myself.
                    My favorite is playing guitar and soccer.
                    In future, I want to go to Janpan for Work and  travel beatifull place.
                    </Paragraph>
                <Box align="center" my={4}>
                    <NexLink href="/works">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My portfolio    
                        </Button>
                    </NexLink>
                </Box>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-tittle">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2002</BioYear>
                    Born in Bac Ninh ( The north of  VietNam's capital ).
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Studied at Yen Phong 1 High School.
                </BioSection>
                <BioSection>
                    <BioYear>2020 to present</BioYear>
                    Studies at Hanoi University of Science and Teachnology.
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-tittle">
                I ♥
                </Heading>
                <Paragraph>
                    Guitar, Photography 
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On the web
                </Heading>

                <List>
                    <ListItem>
                        <Link href="https://github.com/KhangHg" target="_blank">
                            <Button variant="ghost" 
                            colorScheme="teal" 
                            leftIcon={<IoLogoGithub/>}>
                                @KhangHg
                            </Button>
                        </Link>
                    </ListItem>

                    <ListItem>
                        <Link href="https://www.facebook.com/khanghoang.cshs/" target="_blank">
                            <Button variant="ghost" 
                            colorScheme="teal" 
                            leftIcon={<IoLogoFacebook/>}>
                                Khang Hoang
                            </Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>

    )
}

export default Page