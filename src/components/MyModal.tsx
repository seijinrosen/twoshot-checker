import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
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

const MyModal = ({
  isOpen,
  onClose,
  name,
  selectedIds,
}: {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  selectedIds: number[];
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{name}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <UnorderedList spacing={3}>
          {selectedIds.map((id, i) => (
            <ListItem key={i}>
              <Link href={`https://youtu.be/${rawJson[id].videoId}`} isExternal>
                {rawJson[id].title}
                <ExternalLinkIcon mx="2px" color="green.500" />
              </Link>
            </ListItem>
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
