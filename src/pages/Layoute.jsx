'use client'

import {
    Box,
    Flex,
    Button,
    Avatar,
    Stack,
    Text,
    useColorMode,
    Container,
    IconButton,
    useDisclosure
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import LogoAlquran from '../assets/LogoAlquran.png'
import { Link, Outlet } from 'react-router-dom'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
const NavLink = (props) => {
    const { children } = props

    return (
        <Box
            as="a"
            px={2}
            py={1}
            rounded={'md'}
            _hover={{
                textDecoration: 'none',
                //   bg: useColorModeValue('gray.200', 'gray.700'),
            }}
            href={'#'}>
            {children}
        </Box>
    )
}

export default function Layoute() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Container maxW={'container.2xl'}>

                <Box px={4}>
                    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                        <IconButton
                            size={'md'}
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            aria-label={'Open Menu'}
                            display={{ md: 'none' }}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <Flex justifyContent={'space-between'} gap={8}>
                            <Avatar
                                width={"50px"}
                                height={"50px"}
                                src={LogoAlquran}
                                alt={'Logo Alquran'}
                            />
                            <Flex justifyContent={'space-evenly'} gap={8} as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>

                                <Text fontSize={'20px'} ><NavLink><Link to={'/'}>Alquran</Link> </NavLink></Text>
                                <Text fontSize={'20px'} ><NavLink><Link to={'/about'}>About</Link></NavLink></Text>

                            </Flex>
                            {/* <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                                {Links.map((link) => (
                                    <NavLink key={link}>{link}</NavLink>
                                ))}
                            </HStack> */}
                    </Flex>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                        </Stack>
                    </Flex>
                </Flex>
            </Box>
            {isOpen ? (
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as={'nav'} spacing={4}>
                        <NavLink>
                            <Text fontSize={'2xl'} ><Link to={'/'}>Alquran</Link></Text>
                            <Text fontSize={'2xl'} ><Link to={'/about'}>About</Link></Text>
                        </NavLink>
                    </Stack>
                </Box>
            ) : null}
            <Outlet />
        </Container >

        </>
    )
}