import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Container,
  Heading,
  Link,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import rawJson from "../assets/raw.json";

const reversedAllTwoshots = rawJson.slice().reverse();

const AllTwoshotsPage = () => {
  const [reversed, setReversed] = useState(false);

  return (
    <Container as="main" maxW="container.md" my={4}>
      <Heading textAlign="center">ALL TWOSHOTs</Heading>
      <Center my={6}>
        <Button
          leftIcon={<HiOutlineSwitchVertical />}
          colorScheme="teal"
          variant="outline"
          onClick={() => setReversed(!reversed)}
        >
          Reverse
        </Button>
      </Center>
      <OrderedList
        ml={8}
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
    </Container>
  );
};

export default AllTwoshotsPage;
