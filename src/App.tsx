import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import onesJson from "./assets/ones.json";
import topicsJson from "./assets/topics.json";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AllTwoshotsPage from "./pages/AllTwoshotsPage";
import TopPage from "./pages/TopPage";
import { shuffle } from "./util";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [allTags] = useState(shuffle(onesJson.concat(topicsJson)));

  return (
    <Box display="flex" flexDirection="column" minH="100vh">
      <BrowserRouter>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
