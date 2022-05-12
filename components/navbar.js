import Logo from './logo'
import { NextLink } from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons';
import {IoLogoGithub} from 'react-icons/io5'

const LinkItem = ({href, path, target, children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <NextLink href={href} passHref scroll={false}>
            <Link
                p={2}
                bg={active ? 'grassTeal' : undefined}
                color={active ? "#202023" : inactiveColor}
                target={target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box
            position={fixed}
            as={nav}
            w="100%"
            bg={useColorModeValue('#ffffff40', '#2022380')}
            css={{ backdropFilter: "blur(10px)"}}
            zindex={1}
            {...props}
        >
            <Container
            >
                <Flex>
                    <Heading>
                        <Logo/>
                    </Heading>
                </Flex>
                
                <Stack>
                    
                </Stack>

            </Container>
        </Box>
    )
}

export default Navbar