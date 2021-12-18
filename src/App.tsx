import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Flex,
  Switch,
  Button,
  IconButton,
  useColorMode,
  Spacer,
  GridItem
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// import { NextLink } from 'next/link'

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* Some old navbar template */}
    {/* <Flex position="fixed" top="1rem" right="1rem" align="center">
      <NextLink href="/" passHref>
        <Button as="a" variant="ghost" aria-label="Home" my={5} w="100%">
          Home
        </Button>
      </NextLink>

      <NextLink href="/about" passHref>
        <Button as="a" variant="ghost" aria-label="About" my={5} w="100%">
          About
        </Button>
      </NextLink>

      <NextLink href="/contact" passHref>
        <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
          Contact
        </Button>
      </NextLink>
    </Flex> */}
    {/* <Container maxW="container.xl" bg="pink" p={0}> */}
    {/* Navbar */}
    {/* end some old navbar template */}
    <Grid templateColumns='repeat(3, 1fr)' 
    gap={6}
    h="5"
    >
      <GridItem>
        test 
      </GridItem>
      <GridItem>
        test 2
      </GridItem>
      <Box w='100%' h='10' bg='blue.500' />
    </Grid>
    {/* End Navbar */}
    {/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      <Box w='100%' h='10' bg='blue.500' />
      <Box w='100%' h='10' bg='blue.500' />
      <Box w='100%' h='10' bg='blue.500' />
      <Box w='100%' h='10' bg='blue.500' />
      <Box w='100%' h='10' bg='blue.500' />
    </Grid> */}
      <Flex h="100vh" py={20} bg="pink">
        <Box
        w="50vh"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="purple"
        >
        </Box>
        <Spacer/>
        <Box
        w="50vh"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="blue"
        >
        </Box>
        <Spacer/>
        <Box
        w="50vh"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="magenta"
        >
        </Box>
      </Flex>
    {/* </Container> */}
    {/* Chakra default main page */}
    <Box textAlign="center" fontSize="xl" bg="lavender">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
  </ChakraProvider>
)
