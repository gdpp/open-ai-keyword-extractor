import { Box, Image, Text, Flex } from "@chakra-ui/react"
import logoOpAI from "../assets/openai.png"

const Footer = () => {
  return (
    <Box mt={50}>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={logoOpAI} alt="openai" mr={1} />
        <Text>
          Powered by Open AI
        </Text>
      </Flex>
    </Box>
  )
}

export default Footer
