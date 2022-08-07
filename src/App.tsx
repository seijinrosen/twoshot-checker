import { Container } from "@chakra-ui/react";
import { useState } from "react";
import Header from "./components/Header";
import SearchField from "./components/SearchField";
import Tags from "./components/Tags";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header />
      <Container as="main" maxW="container.md">
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <div>Result: {searchQuery}</div>
        <Tags searchQuery={searchQuery} />
      </Container>
    </>
  );
}

export default App;
