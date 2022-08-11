import { Box, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TagsField from "./components/TagsField";

const TopPage = ({ searchQuery }: { searchQuery: string }) => (
  <Container as="main" maxW="container.md" mt={4}>
    <Link to="/all-twoshots">ALL TWOSHOTs</Link>
    <TagsField searchQuery={searchQuery} />
  </Container>
);

const AllTwoshotsPage = () => (
  <>
    <Heading>ALL TWOSHOTs</Heading>
    <Link to="/">トップページ</Link>
  </>
);

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopPage searchQuery={searchQuery} />} />
          <Route path="/all-twoshots" element={<AllTwoshotsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;
