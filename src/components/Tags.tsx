import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { useState } from "react";
import onesJson from "../assets/ones.json";
import rawJson from "../assets/raw.json";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");
  const [onesAndTags] = useState(shuffle(onesJson.concat(tagsJson)));
  const filtered = onesAndTags.filter(({ name }) =>
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
          onClick={() => {
            onOpen();
            setSelectedIds(mainIds);
          }}
        >
          {searchQuery
            ? colored(name, searchQuery)
            : isSmallerThan800
            ? shorten(name)
            : name}
        </Button>
      ))}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {selectedIds.map((id, i) => (
              <Link
                key={i}
                href={`https://youtu.be/${rawJson[id].videoId}`}
                isExternal
              >
                {rawJson[id].title}
              </Link>
            ))}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Tags;
