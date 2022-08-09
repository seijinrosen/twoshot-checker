import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import onesJson from "../assets/ones.json";
import topicsJson from "../assets/topics.json";
import { shuffle } from "../util";
import MyModal from "./MyModal";
import TagButton from "./TagButton";

const TagsField = ({ searchQuery }: { searchQuery: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTagName, setSelectedTagName] = useState("");
  const [selectedMainIds, setSelectedMainIds] = useState<number[]>([]);
  const [allTags] = useState(shuffle(onesJson.concat(topicsJson)));
  const filteredTags = allTags.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const [showNum, setShowNum] = useState(200);

  return (
    <Box>
      <Text fontSize="sm" mb={2}>
        トークデッキ: {filteredTags.length.toLocaleString()} 枚
      </Text>
      {filteredTags.slice(0, showNum).map(({ name, mainIds }, i) => (
        <TagButton
          key={i}
          tagName={name}
          setTagName={setSelectedTagName}
          mainIds={mainIds}
          setMainIds={setSelectedMainIds}
          searchQuery={searchQuery}
          onOpen={onOpen}
        />
      ))}
      <Box my={10} textAlign="center">
        <Text mb={1}>
          {Math.min(showNum, filteredTags.length).toLocaleString()} /{" "}
          {filteredTags.length.toLocaleString()}
        </Text>
        {showNum < filteredTags.length && (
          <Button textAlign="center" onClick={() => setShowNum(showNum + 100)}>
            Show more
          </Button>
        )}
      </Box>
      <MyModal
        isOpen={isOpen}
        onClose={onClose}
        tagName={selectedTagName}
        mainIds={selectedMainIds}
      />
    </Box>
  );
};

export default TagsField;
