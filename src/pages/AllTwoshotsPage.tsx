import { LuExternalLink as ExternalLinkIcon } from "react-icons/lu";
import {
  Button,
  Center,
  Flex,
  Heading,
  Highlight,
  Icon,
  Link,
  ListItem,
  List as OrderedList,
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
      <Heading
        size="4xl"
        textAlign="center"
        fontWeight="bold"
      >
        ALL TWOSHOTs
      </Heading>
      <Center mt={4}>
        <Button
          colorScheme="teal"
          variant={reversed ? "solid" : "outline"}
          onClick={() => setReversed(!reversed)}
        >
          <HiOutlineSwitchVertical /> Reverse
        </Button>
      </Center>
      <Flex mb={3}>
        <Spacer />
        {filteredTwoshots.length.toLocaleString()} 件
      </Flex>
      <OrderedList.Root
        as="ol"
        ml={8}
        gap={4}
      >
        {(reversed ? filteredTwoshots.slice().reverse() : filteredTwoshots).map(
          ({ id, title, videoId }) => (
            <ListItem
              key={id}
              value={id}
            >
              <Link
                display="inline"
                href={`https://youtu.be/${videoId}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {searchQuery ? (
                  <Highlight
                    matchAll
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

                <Icon color="green.500">
                  <ExternalLinkIcon />
                </Icon>
              </Link>
            </ListItem>
          ),
        )}
      </OrderedList.Root>
    </>
  );
};

export default AllTwoshotsPage;
