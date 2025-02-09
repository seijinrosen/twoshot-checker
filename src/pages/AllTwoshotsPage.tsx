import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Flex,
  Heading,
  Highlight,
  Link,
  ListItem,
  OrderedList,
  Spacer,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import rawJson from "../assets/raw.json";

const AllTwoshotsPage = ({ searchQuery }: { searchQuery: string }) => {
  const [reversed, setReversed] = useState(true);
  const filteredTwoshots = rawJson.filter(({ title }) =>
    title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Heading textAlign="center">ALL TWOSHOTs</Heading>
      <Center mt={4}>
        <Button
          leftIcon={<HiOutlineSwitchVertical />}
          colorScheme="teal"
          variant={reversed ? "solid" : "outline"}
          onClick={() => setReversed(!reversed)}
        >
          Reverse
        </Button>
      </Center>
      <Flex mb={3}>
        <Spacer />
        {filteredTwoshots.length.toLocaleString()} 件
      </Flex>
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
          ),
        )}
      </OrderedList>
    </>
  );
};

export default AllTwoshotsPage;
