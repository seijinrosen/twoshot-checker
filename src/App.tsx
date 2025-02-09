import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import onesJson from "./assets/ones.json";
import topicsJson from "./assets/topics.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllTwoshotsPage from "./pages/AllTwoshotsPage";
import TalkDeckPage from "./pages/TalkDeckPage";
import { shuffle } from "./util";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allTags] = useState(shuffle(onesJson.concat(topicsJson)));

  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="100vh"
    >
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <Container
        as="main"
        maxW="container.md"
        mb={5}
      >
        <Tabs
          isFitted
          variant="enclosed"
        >
          <TabList mb={5}>
            <Tab>Talk Deck</Tab>
            <Tab>ALL TWOSHOTs</Tab>
          </TabList>
          <TabPanels>
            <TabPanel p={0}>
              <TalkDeckPage
                searchQuery={searchQuery}
                allTags={allTags}
              />
            </TabPanel>
            <TabPanel p={0}>
              <AllTwoshotsPage searchQuery={searchQuery} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
