import { Button, Text, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import onesJson from "../assets/ones.json";
import tagsJson from "../assets/tags.json";
import { shuffle } from "../util";

const colored = (text: string, searchQuery: string) => {
  const i = text.toLowerCase().indexOf(searchQuery.toLowerCase());

  return (
    <>
      {text.slice(0, i)}
      <Text as="mark">{text.slice(i, i + searchQuery.length)}</Text>
      {text.slice(i + searchQuery.length)}
    </>
  );
};

const shorten = (text: string) => {
  return 25 < text.length ? text.slice(0, 25) + "..." : text;
};

const Tags = ({ searchQuery }: { searchQuery: string }) => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const [onesAndTags] = useState(shuffle(onesJson.concat(tagsJson)));
  const filtered = onesAndTags.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <p>{filtered.length} 件</p>
      {filtered.map(({ name, mainIds }, i) => (
        <Button
          size="xs"
          mr={1}
          mb={1}
          key={i}
          onClick={() => console.log(mainIds)}
        >
          {searchQuery
            ? colored(name, searchQuery)
            : isSmallerThan800
            ? shorten(name)
            : name}
        </Button>
      ))}
    </div>
  );
};

export default Tags;
