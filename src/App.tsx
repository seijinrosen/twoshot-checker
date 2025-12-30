import {
  Box,
  Container,
  TabsTrigger as Tab,
  TabsList as TabList,
  TabsContent as TabPanel,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import onesJson from "./assets/ones.json";
import topicsJson from "./assets/topics.json";
import { useColorModeValue } from "./components/ui/color-mode";
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
      bg={useColorModeValue("", "rgba(26, 32, 44, 0.8)")}
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
        maxW="3xl"
        mb={5}
        px={4}
      >
        <Tabs.Root
          defaultValue="talkDeck"
          fitted
          variant="outline"
        >
          <TabList mb={5}>
            <Tab value="talkDeck">Talk Deck</Tab>
            <Tab value="allTwoshots">ALL TWOSHOTs</Tab>
          </TabList>

          <TabPanel
            p={0}
            value="talkDeck"
          >
            <TalkDeckPage
              searchQuery={searchQuery}
              allTags={allTags}
            />
          </TabPanel>
          <TabPanel
            p={0}
            value="allTwoshots"
          >
            <AllTwoshotsPage searchQuery={searchQuery} />
          </TabPanel>
        </Tabs.Root>
      </Container>
      <Footer />
    </Box>
  );
}

export default App;
