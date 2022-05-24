import { Link, Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Layout from '../components/layouts/article'
import Image from 'next/image';
import {chakra, Button} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph';
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { BioSection, BioYear } from '../components/bio';

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
    return (
        <Layout>
            <Container>
                <Box
                    borderRadius={"lg"}
                    mt={6}
                    mb={6}
                    p={3}
                    textAlign={"center"}
                    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.500')}
                    css={{ backdropFilter: 'blur{10px}'}}
                >
                    Hello, I&apos;m im student developer in Russia!
                </Box>
                
                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as='h2' variant={'page-title'}>
                            Evgeny Dmitriev
                        </Heading>
                        <p>R & D</p>
                    </Box>
                    <Box
                        flexShrink={8}
                        mt={{base:4, md:0}}
                        ml={{md: 6}}
                        textAlign="center"
                    >
                        <Box
                            borderColor="whiteAlpha.800"
                            borderWidth={2}
                            borderStyle="solid"
                            w="100px"
                            h="100px"
                            display="inline-block"
                            borderRadius={"full"}
                            overflow="hidden"
                        >
                            <ProfileImage
                                src="/images/logo.jpg"
                                alt="Profile image"
                                borderRadius={"full"}
                                width="100%"
                                height="100%"
                            />
                        </Box>
                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant={"section-title"}>
                        Work
                    </Heading>
                    <Paragraph>
                        
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="" passHref scroll={false}>
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal"> 
                                MyProtfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as='h3' variant={"section-title"}>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2001</BioYear>
                    </BioSection>
                </Section>

                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">

                    </Heading>
                    <Paragraph>
                        Art, Music
                        <Link href="" target="_blank">
                            Draw
                        </Link>
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    )
}

export default Home;
export { getServerSideProps } from '../components/chakra'