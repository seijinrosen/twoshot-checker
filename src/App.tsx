import { Box, Container, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import onesJson from "./assets/ones.json";
import topicsJson from "./assets/topics.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TagsField from "./components/TagsField";
import { TagType } from "./types";
import { shuffle } from "./util";

const TopPage = ({
  searchQuery,
  allTags,
}: {
  searchQuery: string;
  allTags: TagType[];
}) => (
  <Container as="main" maxW="container.md" mt={4}>
    <Link to="/all-twoshots">ALL TWOSHOTs</Link>
    <TagsField searchQuery={searchQuery} allTags={allTags} />
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
  const [allTags] = useState(shuffle(onesJson.concat(topicsJson)));

  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<TopPage searchQuery={searchQuery} allTags={allTags} />}
          />
          <Route path="/all-twoshots" element={<AllTwoshotsPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </Box>
  );
}

export default App;
