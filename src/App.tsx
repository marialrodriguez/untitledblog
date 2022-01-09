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
  GridItem,
  Image,
  Heading
} from "@chakra-ui/react"
import {
  FaFacebookSquare,
  FaInstagramSquare
} from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { type } from "os"
import BackgroundVideo from "./BackgroundVideo"
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
// import { NextLink } from 'next/link'

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* start social bar */}
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h="10" bg='#333333'>
      <GridItem></GridItem>
      <GridItem colStart={3}> 
      <Button colorScheme='facebook' className='link-button' borderRadius='0px' variant="ghost" leftIcon={<FaFacebookSquare/>}></Button>
      <Button colorScheme='facebook' className='link-button' borderRadius='0px' variant="ghost" leftIcon={<FaInstagramSquare/>}></Button>
      <Button colorScheme='facebook' className='link-button' borderRadius='0px' variant="ghost" leftIcon={<SiTiktok/>}></Button>
      </GridItem>
    </Grid>
    {/* end social bar */}
    {/* start navbar */}
    <Grid templateColumns='repeat(4, 1fr)' gap={1} h="20">
      <GridItem colSpan={1} mt={4}>
        <Image boxSize='50px' src="./diamondlogo.jpg"/>
      </GridItem>
      <GridItem colStart={2} colSpan={3} mt={5}> 
        <Button className='link-button' borderRadius='0px' variant="ghost">Home</Button>
        <Button className='link-button' borderRadius='0px' variant="ghost">About</Button>
        <Button className='link-button' borderRadius='0px' variant="ghost">Blog</Button>
        <Button className='link-button' borderRadius='0px' variant="ghost">Easy Tech</Button>
        <Button className='link-button' borderRadius='0px' variant="ghost">Diy</Button>
        <Button className='link-button' borderRadius='0px' variant="ghost">NFT's</Button>
      </GridItem>
      <GridItem colStart={5} mt={4}>
        <Button className='feature-button' size='md' height='48px' width='200px' borderRadius='0px' color='white' backgroundColor='black'>
          Sign Up
        </Button>
      </GridItem>
    </Grid>
    {/* end navbar */}
    {/* start feature block */}
    <Grid templateColumns='repeat(2, 1fr)' gap={1} bg="#f5f5f7">
      {/* feature photo */}
      <GridItem colStart={1} m={5}>
        <Image src="./girllaptop.jpg"></Image>
      </GridItem>
      {/* feature text */}
      <GridItem colStart={2} m={5}>
        <Heading as='h1' size='xl'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Heading>
        <Heading as='h2' size='xs' mt={5}>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </Heading>
      </GridItem> 
    </Grid>
    {/* end video block */}
    {/* video block */}
    <BackgroundVideo/>
    {/* end video block */}
    {/* Chakra default main page */}
    <Box textAlign="center" fontSize="xl" bg="#424245">
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
    {/* End Chakra default */}
    {/* start display boxes */}
      <Flex h="100vh" py={20} bg="#FBEDF9">
        <Box w="60vh" h="full" p={50} spacing={10} alignItems="flex-start" bg="">
          <Image src='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
          <Button className='feature-button' size='md' height='48px' width='200px'borderRadius='0px' color='white'backgroundColor='black' m={6}>
            page
          </Button>
        </Box>
        <Spacer/>
        <Box w="60vh" h="full" p={10} spacing={10} alignItems="flex-start"bg="">
          <Image src='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
          <Button className='feature-button' size='md' height='48px' width='200px'borderRadius='0px' color='white'backgroundColor='black' m={6}>
            page
          </Button>
        </Box>
        <Spacer/>
        <Box w="60vh" h="full" p={10} spacing={10} alignItems="flex-start" bg="">
          <Image src='https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'/>
          <Button className='feature-button' size='md' height='48px' width='200px'borderRadius='0px' color='white'backgroundColor='black' m={6}>
            page
          </Button>
        </Box>
      </Flex>
    {/* end display boxes */}
   
  </ChakraProvider>
)
