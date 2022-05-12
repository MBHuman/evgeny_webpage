import NextLink from 'next/link';
import {
    Link,
    Container,
    Heading,
    Box,
    SimpleGrid,
    Button,
    List,
    ListItem,
    useColorModeValue,
    chakra
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Image from 'next/image'


const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => {
    return (
    <Container>
        <Box
            borderRadius="lg"
            mb={6}
            p={3}
            textAlign="center"
            bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
            css={{ backgroundFilter: "blur(10px)" }}
        >
            Hello
        </Box>
        <Box display={{ md: 'flex' }}>
            <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Evgeny Dmitriev
                </Heading>
                <p>Digital ( Developer / Economics )</p>
            </Box>
            <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                ml={{ md: 6 }}
                textAlign="center"
            >
                <Box
                    borderColor="whiteAlpha.800"
                    borderWidth={2}
                    borderStyle="solid"
                    w="100px"
                    h="100px"
                    display="inline-block"
                    borderRadius="full"
                    overflow="hidden"
                >
                    {/* <ProfileImage
                    src="/images/takuya.jpg"
                    alt="Profile image"
                    borderRadius="full"
                    width="100%"
                    height="100%"
                    /> */}
                </Box>
            </Box>
        </Box>
        
    </Container>)
}

export default Home;