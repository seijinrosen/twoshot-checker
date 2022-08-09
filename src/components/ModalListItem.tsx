import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Highlight, LinkBox, LinkOverlay, ListItem } from "@chakra-ui/react";
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
      <LinkBox as="article" p="5" boxShadow="2xl" rounded="md">
        <LinkOverlay href={`https://youtu.be/${videoId}`} isExternal>
          <Highlight
            query={tagName}
            styles={{
              px: 1,
              mx: 1,
              fontWeight: "bold",
              rounded: 5,
              bg: "orange.100",
            }}
          >
            {title}
          </Highlight>
          <ExternalLinkIcon mx="2px" color="green.500" />
        </LinkOverlay>
      </LinkBox>
    </ListItem>
  );
};

export default ModalListItem;
