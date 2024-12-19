import { Flex, Link, HStack, Box } from '@chakra-ui/react';

function Navbar () {
return (
  <Box position="relative">
  <Flex as="nav" w="100vw" bg="#0a5836" p={4} justifyContent="flex-end" alignItems="center" top="0" position="fixed">
    <HStack spacing={4}>
      <Link color="white" href="#projects">Projects</Link>
      <Link color="white" href="#contact">Contact</Link>
    </HStack>
  </Flex>
  
  </Box>
)
}

export default Navbar