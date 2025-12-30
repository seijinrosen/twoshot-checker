import {
  Box,
  Button,
  Center,
  Stack,
  Stat,
  StatLabel,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import MyModal from "../components/MyModal";
import TagButton from "../components/TagButton";
import { TagType } from "../types";

const TalkDeckPage = ({
  searchQuery,
  allTags,
}: {
  searchQuery: string;
  allTags: TagType[];
}) => {
  const { open: isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTagName, setSelectedTagName] = useState("");
  const [selectedMainIds, setSelectedMainIds] = useState<number[]>([]);
  const filteredTags = allTags.filter(({ name }) =>
    name.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  const [showNum, setShowNum] = useState(200);

  return (
    <Box>
      <Center mb={4}>
        <div>
          <Stat.Root>
            <StatLabel>トークデッキ</StatLabel>
            <Stat.ValueText alignItems="baseline">
              {filteredTags.length.toLocaleString()}{" "}
              <Stat.ValueUnit>枚</Stat.ValueUnit>
            </Stat.ValueText>
          </Stat.Root>
        </div>
      </Center>
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
      <VStack
        gap={3}
        my={8}
      >
        <Text>
          {Math.min(showNum, filteredTags.length).toLocaleString()} /{" "}
          {filteredTags.length.toLocaleString()}
        </Text>
        {showNum < filteredTags.length && (
          <Stack
            direction="row"
            gap={2}
          >
            <Button
              w={120}
              onClick={() => setShowNum(showNum + 200)}
            >
              Show +200
            </Button>
            <Button
              w={120}
              onClick={() => setShowNum(filteredTags.length)}
            >
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

export default TalkDeckPage;
