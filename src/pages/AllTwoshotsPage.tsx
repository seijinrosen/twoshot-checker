import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Container,
  Heading,
  Highlight,
  Link,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import rawJson from "../assets/raw.json";

const AllTwoshotsPage = ({ searchQuery }: { searchQuery: string }) => {
  const [reversed, setReversed] = useState(false);
  const filteredTwoshots = rawJson.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container as="main" maxW="container.md" my={4}>
      <Heading textAlign="center">ALL TWOSHOTs</Heading>
      {filteredTwoshots.length}
      <Center my={6}>
        <Button
          leftIcon={<HiOutlineSwitchVertical />}
          colorScheme="teal"
          variant={reversed ? "solid" : "outline"}
          onClick={() => setReversed(!reversed)}
        >
          Reverse
        </Button>
      </Center>
      <OrderedList ml={8} spacing={4}>
        {(reversed ? filteredTwoshots.slice().reverse() : filteredTwoshots).map(
          ({ id, title, videoId }) => (
            <ListItem key={id} value={id}>
              <Link href={`https://youtu.be/${videoId}`} isExternal>
                {searchQuery ? (
                  <Highlight
                    query={searchQuery}
                    styles={{
                      fontWeight: "bold",
                      rounded: 5,
                      bg: "orange.100",
                    }}
                  >
                    {title}
                  </Highlight>
                ) : (
                  title
                )}
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
