import {
  Box,
  Flex,
  Link,
  Text,
  Heading,
  Image,
  SimpleGrid,
  // Button,
} from '@chakra-ui/react'
// import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/card'
import logo from '../assets/logowithbackgroundremoved.png'


function MainSection() {
  return (
    <Box as="main" p={8} pt="60px" pb="60px" flex="1">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
        mb={8}
      >
        <Box flex="1" textAlign="center" mb={{ base: 4, md: 0 }}>
          <Heading as="h2" size="xl">
            Welcome! Kia ora!
          </Heading>
          <Text mt={4}>Front End Developer.</Text>
        </Box>
        <Box flex="1" textAlign="center">
          <Image
            src="src/assets/naomi.png"
            alt="A picture of me"
            borderRadius="full"
            boxSize="200px"
            mx="auto"
          />
        </Box>
      </Flex>
      <Box id="projects">
        <Heading as="h3" size="lg" mb={4}>
          Current Project
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={4}
            textAlign="center"
          >
            <Image
          src={logo}
          alt="a logo for sew far, sew good"
          boxSize="100px"
          mx="auto"
        ></Image>
            <Text mb={4}>
              I&apos;m learning to sew. See what I&apos;ve made!
            </Text>
            <Link
              href="https://replaceMeWithProperLink"
              isExternal
              color="teal.500"
            >
              Link coming soon
              {/* Let&apos;s go */}
            </Link>
          </Box>
        </SimpleGrid>
      </Box>
      {/* second card not formatting properly, needs fixing */}
      {/* <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          src="src/assets/logowithbackgroundremoved.png"
          alt="pair of baby pants"
          boxSize="200px"
          mx="auto"
        ></Image>
        <CardHeader>
          <Heading size="md">Card Header</Heading>
        </CardHeader>
        <CardBody>
          <Text>Howdy</Text>
        </CardBody>
        <CardFooter>
          <Button colorScheme="teal">Click Me</Button>
        </CardFooter>
      </Card> */}
    </Box>
  )
}

export default MainSection
