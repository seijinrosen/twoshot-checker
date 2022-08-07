import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { SearchFieldType } from "../types";
import SearchField from "./SearchField";

const Header = ({ searchQuery, setSearchQuery }: SearchFieldType) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as="header"
      sx={{
        position: "sticky",
        top: "0",
      }}
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
    >
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>TWOSHOT CHECKER</Box>
        <SearchField
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
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
