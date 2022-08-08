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
                <Highlight
                  query={name}
                  styles={{
                    px: 1,
                    fontWeight: "bold",
                    rounded: 5,
                    bg: "orange.100",
                  }}
                >
                  {rawJson[id].title}
                </Highlight>
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
