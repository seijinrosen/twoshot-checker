import { ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Link,
  ListItem,
  OrderedList,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import rawJson from "../assets/raw.json";

const reversedAllTwoshots = rawJson.slice().reverse();

const MyDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [reversed, setReversed] = useState(false);

  return (
    <>
      <IconButton
        aria-label="Open All TWOSHOTs"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ALL TWOSHOTs</DrawerHeader>
          <DrawerBody>
            <OrderedList
              spacing={4}
              start={reversed ? rawJson.length - 1 : 0}
              reversed={reversed}
            >
              {(reversed ? reversedAllTwoshots : rawJson).map(
                ({ title, videoId }, i) => (
                  <ListItem key={i}>
                    <Link href={`https://youtu.be/${videoId}`} isExternal>
                      {title}
                      <ExternalLinkIcon color="green.500" />
                    </Link>
                  </ListItem>
                )
              )}
            </OrderedList>
          </DrawerBody>
          <DrawerFooter>
            <IconButton
              aria-label="Reverse"
              icon={<HiOutlineSwitchVertical />}
              onClick={() => setReversed(!reversed)}
            />
            <Button ml={1} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
