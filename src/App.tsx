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
    {/* start social bar */}
    <Grid templateColumns='repeat(1, 1fr)' gap={1} h="10">
      <GridItem bg='#f4fafa'>
        beginning 
      </GridItem>
    </Grid>
    {/* end social bar */}
    {/* start navbar */}
    <Grid templateColumns='repeat(3, 1fr)' gap={1} h="20">
      <GridItem bg='#e7e7d7'>
        beginning 
      </GridItem>
      <GridItem bg='#e6c1c1'>
        middle 
        <Button variantColor="green" variant="ghost">Button</Button>
        <Button variantColor="green" variant="ghost">Button</Button>
        <Button variantColor="green" variant="ghost">Button</Button>
      </GridItem>
      <GridItem bg='#f8b5ae'>
        end
        <Button variant="solid">Button</Button>
      </GridItem>
    </Grid>
    {/* end navbar */}
    {/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      <Box w='100%' h='10' bg='blue.500' />
      <Box w='100%' h='10' bg='blue.500' />
      <Box w='100%' h='10' bg='blue.500' />
      <Box w='100%' h='10' bg='blue.500' />
      <Box w='100%' h='10' bg='blue.500' />
    </Grid> */}
    {/* start display boxes */}
      <Flex h="100vh" py={20} bg="f4fafa">
        <Box
        w="60vh"
        h="full"
        p={50}
        spacing={10}
        alignItems="flex-start"
        bg="#e7e7d7"
        >
        </Box>
        <Spacer/>
        <Box
        w="60vh"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="#e7e7d7"
        >
        </Box>
        <Spacer/>
        <Box
        w="60vh"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="#e7e7d7"
        >
        </Box>
      </Flex>
    {/* end display boxes */}
    {/* Chakra default main page */}
    <Box textAlign="center" fontSize="xl" bg="#e6c1c1">
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
