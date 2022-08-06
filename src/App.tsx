import { useState } from "react";
import SearchField from "./components/SearchField";
import Tags from "./components/Tags";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      <SearchField searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div>Result: {searchQuery}</div>
      <Tags searchQuery={searchQuery} />
    </div>
  );
}

export default App;
