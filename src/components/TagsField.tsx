import { Box, Button, Center, Text, useDisclosure } from "@chakra-ui/react";
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
  const [showAll, setShowAll] = useState(false);

  return (
    <Box>
      <Text fontSize="sm" mb={2}>
        トークデッキ: {filteredTags.length.toLocaleString()} 枚
      </Text>
      {filteredTags.slice(0, 100).map(({ name, mainIds }, i) => (
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
      {showAll ? (
        filteredTags
          .slice(100)
          .map(({ name, mainIds }, i) => (
            <TagButton
              key={i}
              tagName={name}
              setTagName={setSelectedTagName}
              mainIds={mainIds}
              setMainIds={setSelectedMainIds}
              searchQuery={searchQuery}
              onOpen={onOpen}
            />
          ))
      ) : (
        <Center mt={10}>
          <Button textAlign="center" onClick={() => setShowAll(true)}>
            Show All
          </Button>
        </Center>
      )}
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
