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
import { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
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
}) => {
  const [reversed, setReversed] = useState(false);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      scrollBehavior="inside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mr={3}>
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
          </Highlight>{" "}
          ({mainIds.length.toLocaleString()} 件)
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <UnorderedList
            spacing={4}
            listStyleType="none"
            m={0}
          >
            {(reversed ? mainIds.slice().reverse() : mainIds).map((mainId) => (
              <ModalListItem
                key={mainId}
                mainId={mainId}
                tagName={tagName}
              />
            ))}
          </UnorderedList>
        </ModalBody>
        <ModalFooter>
          {2 <= mainIds.length && (
            <Button
              mr={3}
              leftIcon={<HiOutlineSwitchVertical />}
              colorScheme="teal"
              variant={reversed ? "solid" : "outline"}
              onClick={() => setReversed(!reversed)}
            >
              Reverse
            </Button>
          )}
          <Button
            colorScheme="blue"
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default MyModal;
