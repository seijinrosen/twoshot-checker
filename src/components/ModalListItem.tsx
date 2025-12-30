import { LuExternalLink as ExternalLinkIcon } from "react-icons/lu";
import {
  Highlight,
  Icon,
  LinkBox,
  LinkOverlay,
  ListItem,
} from "@chakra-ui/react";
import rawJson from "../assets/raw.json";

const ModalListItem = ({
  mainId,
  tagName,
}: {
  mainId: number;
  tagName: string;
}) => {
  const { title, videoId } = rawJson[mainId];

  return (
    <ListItem>
      <LinkBox
        as="article"
        p="5"
        boxShadow="2xl"
        rounded="md"
        _hover={{
          transform: "translateY(-1px)",
          boxShadow: "xl",
        }}
      >
        <LinkOverlay
          href={`https://youtu.be/${videoId}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Highlight
            query={tagName}
            styles={{
              px: 1,
              mx: 1,
              fontWeight: "bold",
              rounded: 5,
              bg: "orange.100",
              whiteSpace: tagName.length <= 20 ? "nowrap" : "normal",
            }}
          >
            {title}
          </Highlight>
          <Icon
            mx="2px"
            color="green.500"
          >
            <ExternalLinkIcon />
          </Icon>
        </LinkOverlay>
      </LinkBox>
    </ListItem>
  );
};

export default ModalListItem;
