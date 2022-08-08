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
} from "@chakra-ui/react";
import rawJson from "../assets/raw.json";

const MyModal = ({
  isOpen,
  onClose,
  selectedIds,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedIds: number[];
}) => (
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
);

export default MyModal;
