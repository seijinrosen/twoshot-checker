import { Button, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
import onesJson from "../assets/ones.json";
import topicsJson from "../assets/topics.json";
import { shuffle } from "../util";
import MyModal from "./MyModal";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedName, setSelectedName] = useState("");
  const [selectedMainIds, setSelectedMainIds] = useState<number[]>([]);
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const [onesAndTopics] = useState(shuffle(onesJson.concat(topicsJson)));
  const filtered = onesAndTopics.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Text fontSize="sm" mb={2}>
        トークデッキ: {filtered.length.toLocaleString()} 枚
      </Text>
      {filtered.map(({ name, mainIds }, i) => (
        <Button
          size="xs"
          mr={1}
          mb={1}
          key={i}
          rounded={10}
          onClick={() => {
            onOpen();
            setSelectedName(name);
            setSelectedMainIds(mainIds);
          }}
        >
          {searchQuery
            ? colored(name, searchQuery)
            : isSmallerThan800
            ? shorten(name)
            : name}
        </Button>
      ))}
      <MyModal
        isOpen={isOpen}
        onClose={onClose}
        tagName={selectedName}
        mainIds={selectedMainIds}
      />
    </div>
  );
};

export default Tags;
