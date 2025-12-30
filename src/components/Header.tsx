import { Box, Flex, Heading, useMediaQuery } from "@chakra-ui/react";
import { SearchFieldType } from "../types";
import { ColorModeButton, useColorModeValue } from "./ui/color-mode";
import SearchField from "./SearchField";

const Header = ({ searchQuery, setSearchQuery }: SearchFieldType) => {
  const [isLargerThan600] = useMediaQuery(["(min-width: 600px)"]);

  return (
    <Box
      as="header"
      zIndex={999}
      pos="sticky"
      top={0}
      bg={useColorModeValue(
        "rgba(255, 255, 255, 0.8)",
        "rgba(26, 32, 44, 0.8)",
      )}
      px={4}
      backdropFilter="saturate(180%) blur(5px)"
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Heading
          asChild
          fontWeight="bold"
          lineHeight={1.2}
          mr={4}
          whiteSpace={isLargerThan600 ? "nowrap" : "normal"}
        >
          <a href="/">TWOSHOT CHECKER</a>
        </Heading>
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <ColorModeButton ml={1} />
      </Flex>
    </Box>
  );
};

export default Header;
