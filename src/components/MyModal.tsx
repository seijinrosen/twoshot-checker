import {
  Button,
  Highlight,
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
      <ModalHeader>
        <Highlight
          query={tagName}
          styles={{
            px: 1,
            rounded: 5,
            bg: "orange.100",
            whiteSpace: "normal",
          }}
        >
          {tagName}
        </Highlight>
      </ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <UnorderedList spacing={4} listStyleType="none" m={0}>
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
