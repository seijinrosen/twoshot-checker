import {
  CloseButton,
  Input,
  InputGroup,
  InputRightElement,
  Kbd,
  Tooltip,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const SearchField = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}) => {
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
          ) : (
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
          )
        }
      />
    </InputGroup>
  );
};

export default SearchField;
