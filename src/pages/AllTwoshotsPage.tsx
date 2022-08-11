import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Container,
  Heading,
  IconButton,
  Link,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineSwitchVertical } from "react-icons/hi";
import { Link as RouterLink } from "react-router-dom";
import rawJson from "../assets/raw.json";

const reversedAllTwoshots = rawJson.slice().reverse();

const AllTwoshotsPage = () => {
  const [reversed, setReversed] = useState(false);

  return (
    <Container as="main" maxW="container.md" mt={4}>
      <Heading>ALL TWOSHOTs</Heading>
      <RouterLink to="/">トップページ</RouterLink>
      <IconButton
        aria-label="Reverse"
        icon={<HiOutlineSwitchVertical />}
        onClick={() => setReversed(!reversed)}
      />
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
    </Container>
  );
};

export default AllTwoshotsPage;
