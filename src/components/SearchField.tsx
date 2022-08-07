import {
  CloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Kbd,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { SearchFieldType } from "../types";

const SearchField = ({ searchQuery, setSearchQuery }: SearchFieldType) => {
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const inputRef = useRef<HTMLInputElement>(null);
  const focusTextField = () => inputRef.current?.focus();

  useHotkeys("/", (e) => {
    e.preventDefault();
    focusTextField();
  });

  return (
    <InputGroup>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search..."
        ref={inputRef}
        autoFocus
      />
      <InputRightElement
        children={
          searchQuery ? (
            <Tooltip hasArrow label="消去">
              <CloseButton onClick={() => setSearchQuery("")} />
            </Tooltip>
          ) : isLargerThan600 ? (
            <Tooltip
              hasArrow
              label='スラッシュキー ( "/" ) を押して検索フィールドに移動できます'
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
      />
    </InputGroup>
  );
};

export default SearchField;
