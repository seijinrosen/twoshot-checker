import {
  Button,
  Highlight,
  Dialog as Modal,
  DialogBody as ModalBody,
  CloseButton,
  DialogContent as ModalContent,
  DialogFooter as ModalFooter,
  DialogHeader as ModalHeader,
  DialogBackdrop as ModalOverlay,
  Portal,
  List as UnorderedList,
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
    <Modal.Root
      open={isOpen}
      onOpenChange={onClose}
      scrollBehavior="inside"
    >
      <Portal>
        <ModalOverlay />

        <Modal.Positioner>
          <ModalContent>
            <ModalHeader>
              <Modal.Title>
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
              </Modal.Title>
            </ModalHeader>

            <ModalBody>
              <UnorderedList.Root
                gap={4}
                listStyleType="none"
                m={0}
              >
                {(reversed ? mainIds.slice().reverse() : mainIds).map(
                  (mainId) => (
                    <ModalListItem
                      key={mainId}
                      mainId={mainId}
                      tagName={tagName}
                    />
                  ),
                )}
              </UnorderedList.Root>
            </ModalBody>
            <ModalFooter>
              {2 <= mainIds.length && (
                <Button
                  colorScheme="teal"
                  variant={reversed ? "solid" : "outline"}
                  onClick={() => setReversed(!reversed)}
                >
                  <HiOutlineSwitchVertical /> Reverse
                </Button>
              )}
              <Button
                colorScheme="blue"
                onClick={onClose}
              >
                Close
              </Button>
            </ModalFooter>

            <Modal.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Modal.CloseTrigger>
          </ModalContent>
        </Modal.Positioner>
      </Portal>
    </Modal.Root>
  );
};

export default MyModal;
