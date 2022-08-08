import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Highlight,
  Link,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
} from "@chakra-ui/react";
import rawJson from "../assets/raw.json";

const ModalListItem = ({
  mainId,
  tagName,
}: {
  mainId: number;
  tagName: string;
}) => {
  const { title, videoId } = rawJson[mainId];

  return (
    <ListItem>
      <Link href={`https://youtu.be/${videoId}`} isExternal>
        <Highlight
          query={tagName}
          styles={{
            px: 1,
            mx: 1,
            fontWeight: "bold",
            rounded: 5,
            bg: "orange.100",
          }}
        >
          {title}
        </Highlight>
        <ExternalLinkIcon mx="2px" color="green.500" />
      </Link>
    </ListItem>
  );
};

const MyModal = ({
  isOpen,
  onClose,
  tagName,
  mainIds,
}: {
  isOpen: boolean;
  onClose: () => void;
  tagName: string;
  mainIds: number[];
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{tagName}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <UnorderedList spacing={3}>
          {mainIds.map((mainId) => (
            <ModalListItem key={mainId} mainId={mainId} tagName={tagName} />
          ))}
        </UnorderedList>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

export default MyModal;
