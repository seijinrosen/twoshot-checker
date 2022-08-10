import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  IconButton,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import { SearchFieldType } from "../types";
import MyDrawer from "./MyDrawer";
import SearchField from "./SearchField";

const Header = ({ searchQuery, setSearchQuery }: SearchFieldType) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      zIndex={999}
      pos="sticky"
      top={0}
      bg={useColorModeValue(
        "rgba(255, 255, 255, 0.8)",
        "rgba(26, 32, 44, 0.8)"
      )}
      px={4}
      backdropFilter="saturate(180%) blur(5px)"
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Heading
          as="a"
          href="/"
          size="md"
          mr={4}
          whiteSpace={isLargerThan600 ? "nowrap" : "normal"}
        >
          TWOSHOT CHECKER
        </Heading>
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Box mx={1}>
          <MyDrawer />
        </Box>
        <IconButton
          onClick={toggleColorMode}
          aria-label="Toggle color mode"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>
    </Box>
  );
};

export default Header;
