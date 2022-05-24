import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import NavBar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="description" content="Evgeny Dmitriev" />
            </Head>
            
            <NavBar path={router.asPat} />

            <Container maxW="container.md" pt={14}>
                {children}
                <Footer/>
            </Container>
        </Box>
    )
}

export default Main