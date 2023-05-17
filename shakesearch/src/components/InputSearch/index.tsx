import React, { useRef } from "react";
import {
  Input,
  Stack,
  InputGroup,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import useCommandShortcut from "@/hooks/useCommandShortcut";
import useTextBoardContext from "@/hooks/useTextBoardContext";

const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useCommandShortcut(inputRef);

  const { value, onChange } = useTextBoardContext();

  const ctrlKey = navigator.userAgent.indexOf("Mac") != -1 ? "⌘" : "Ctrl";

  return (
    <Stack>
      <InputGroup>
        <Input
          ref={inputRef}
          name="input-search"
          value={value}
          onChange={onChange}
          size={"md"}
          type="text"
          placeholder="Search ..."
        />
        <InputRightElement className="mx-2 w-1/5" pointerEvents="none">
          <Text className="text-gray-400 px-2">{ctrlKey} + K</Text>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default InputSearch;
