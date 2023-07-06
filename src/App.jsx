import { Container, Box } from "@chakra-ui/react";

// Components
import Header from "./components/Header";
import TextInput from "./components/TextInput";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box bg='blue.600' color='white' h='100vh' pt={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput />
        <Footer />
      </Container>
    </Box>
  )
}

export default App
