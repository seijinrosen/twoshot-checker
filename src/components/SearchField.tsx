import { LuSearch as SearchIcon } from "react-icons/lu";
import {
  CloseButton,
  Input,
  InputGroup,
  Kbd,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { SearchFieldType } from "../types";
import { Tooltip } from "./ui/tooltip";

const SearchField = ({ searchQuery, setSearchQuery }: SearchFieldType) => {
  const [isLargerThan600] = useMediaQuery(["(min-width: 600px)"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const focusTextField = () => inputRef.current?.focus();

  useHotkeys("/", (e) => {
    e.preventDefault();
    focusTextField();
  });

  return (
    <InputGroup
      startElement={<SearchIcon />}
      endElement={
        searchQuery ? (
          <Tooltip
            showArrow
            content="消去"
          >
            <CloseButton
              me="-2"
              size="xs"
              onClick={() => {
                setSearchQuery("");
                focusTextField();
              }}
            />
          </Tooltip>
        ) : isLargerThan600 ? (
          <Tooltip
            showArrow
            content='スラッシュキー ( "/" ) を押して検索フィールドに移動できます'
          >
            <Kbd
              userSelect="none"
              fontSize={16}
              cursor="pointer"
              onClick={focusTextField}
            >
              /
            </Kbd>
          </Tooltip>
        ) : null
      }
    >
      {/* <InputLeftElement pointerEvents="none" /> */}
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        ref={inputRef}
        autoFocus
      />
    </InputGroup>
  );
};

export default SearchField;
