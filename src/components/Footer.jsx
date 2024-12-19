import { Box, Link, Text } from '@chakra-ui/react';
// import { VscGithub } from "react-icons/vsc";

function Footer () {
return (
<Box as="footer" bg="#0a5836" p={4} textAlign="center" color="white" w="100vw">
    <Text>&copy; {new Date().getFullYear()} All rights reserved.</Text>
    {/* <Icon><VscGithub /></Icon> */}
    <Link color="white" href="#top" mt={2} display="inline-block">Return to top</Link>
  </Box>
)
}

export default Footer