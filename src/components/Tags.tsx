import { useState } from "react";
import onesJson from "../assets/ones.json";
import tagsJson from "../assets/tags.json";
import { shuffle } from "../util";

const Tags = ({ searchQuery }: { searchQuery: string }) => {
  const [onesAndTags] = useState(shuffle(onesJson.concat(tagsJson)));
  const filtered = onesAndTags.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <p>{filtered.length} 件</p>
      {filtered.map(({ name, mainIds }, i) => (
        <button key={i} onClick={() => console.log(mainIds)}>
          {name}
        </button>
      ))}
    </div>
  );
};

export default Tags;
