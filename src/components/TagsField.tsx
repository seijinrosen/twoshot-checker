import {
  Box,
  Button,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
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
      <Stat textAlign="center" mb={3}>
        <StatLabel>トークデッキ</StatLabel>
        <StatNumber>
          {filteredTags.length.toLocaleString()}{" "}
          <Box as="span" fontSize="sm">
            枚
          </Box>
        </StatNumber>
      </Stat>
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
      <VStack spacing={3} my={8}>
        <Text>
          {Math.min(showNum, filteredTags.length).toLocaleString()} /{" "}
          {filteredTags.length.toLocaleString()}
        </Text>
        {showNum < filteredTags.length && (
          <Stack direction="row" spacing={2}>
            <Button w={120} onClick={() => setShowNum(showNum + 200)}>
              Show +200
            </Button>
            <Button w={120} onClick={() => setShowNum(filteredTags.length)}>
              Show All
            </Button>
          </Stack>
        )}
      </VStack>
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
