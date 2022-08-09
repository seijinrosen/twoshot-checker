import { Box, Container } from "@chakra-ui/react";
import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TagsField from "./components/TagsField";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container as="main" maxW="container.md" mt={4}>
        <TagsField searchQuery={searchQuery} />
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
