import { Button, Text, useMediaQuery } from "@chakra-ui/react";

const colored = (text: string, searchQuery: string) => {
  const i = text.toLowerCase().indexOf(searchQuery.toLowerCase());

  return (
    <>
      {text.slice(0, i)}
      <Text as="mark">{text.slice(i, i + searchQuery.length)}</Text>
      {text.slice(i + searchQuery.length)}
    </>
  );
};

const shorten = (text: string) => {
  return 25 < text.length ? text.slice(0, 25) + "..." : text;
};

const TagButton = ({
  tagName,
  setTagName,
  mainIds,
  setMainIds,
  searchQuery,
  onOpen,
}: {
  tagName: string;
  setTagName: React.Dispatch<React.SetStateAction<string>>;
  mainIds: number[];
  setMainIds: React.Dispatch<React.SetStateAction<number[]>>;
  searchQuery: string;
  onOpen: () => void;
}) => {
  const [isSmallerThan800] = useMediaQuery("(max-width: 800px)");

  return (
    <Button
      size="xs"
      mr={1}
      mb={1}
      rounded={10}
      onClick={() => {
        setTagName(tagName);
        setMainIds(mainIds);
        onOpen();
      }}
    >
      {searchQuery
        ? colored(tagName, searchQuery)
        : isSmallerThan800
        ? shorten(tagName)
        : tagName}
    </Button>
  );
};

export default TagButton;
