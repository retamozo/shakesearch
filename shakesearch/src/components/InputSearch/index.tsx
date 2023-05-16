"use client";
import React, { useRef } from "react";
import {
  Input,
  Stack,
  InputGroup,
  InputRightAddon,
  Text,
  InputRightElement,
} from "@chakra-ui/react";
import useCommandShortcut from "@/hooks/useCommandShortcut";
import useTextBoardContext from "@/hooks/useTextBoardContext";

const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useCommandShortcut(inputRef);

  const { value, onChange } = useTextBoardContext();

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
          placeholder="Search"
        />
        <InputRightElement className="mx-2" pointerEvents="none">
          <Text className="text-gray-400 px-2"> ⌘+K</Text>
        </InputRightElement>
      </InputGroup>
    </Stack>
  );
};

export default InputSearch;
