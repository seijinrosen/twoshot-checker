import { Container } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./components/Header";
import Tags from "./components/Tags";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container as="main" maxW="container.md">
        <div>Result: {searchQuery}</div>
        <Tags searchQuery={searchQuery} />
      </Container>
    </>
  );
}

export default App;
