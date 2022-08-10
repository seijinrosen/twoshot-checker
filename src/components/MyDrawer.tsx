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
import rawJson from "../assets/raw.json";

const MyDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Open All TWOSHOTs"
        icon={<HamburgerIcon />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>ALL TWOSHOTs</DrawerHeader>
          <DrawerBody>
            <OrderedList start={0}>
              {rawJson.map(({ title, videoId }, i) => (
                <ListItem key={i}>
                  <Link href={`https://youtu.be/${videoId}`} isExternal>
                    {title}
                    <ExternalLinkIcon color="green.500" />
                  </Link>
                </ListItem>
              ))}
            </OrderedList>
          </DrawerBody>
          <DrawerFooter>
            <Button onClick={onClose}>Close</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MyDrawer;
