import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  UnorderedList,
} from "@chakra-ui/react";
import ModalListItem from "./ModalListItem";

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
  <Modal isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{tagName}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <UnorderedList spacing={3} listStyleType="none" m={0}>
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
