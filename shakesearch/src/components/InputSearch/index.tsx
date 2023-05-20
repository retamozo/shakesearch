"use client";
import React, { useRef } from "react";
import { Input, InputGroup, Text, InputRightElement } from "@chakra-ui/react";
import useCommandShortcut from "@/hooks/useCommandShortcut";
import useTextBoardContext from "@/hooks/useTextBoardContext";

const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useCommandShortcut(inputRef);

  const { value, onChange } = useTextBoardContext();

  const ctrlKey = navigator.userAgent.indexOf("Mac") != -1 ? "⌘" : "Ctrl";

  return (
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
      <InputRightElement className="mx-2" width={"4rem"} pointerEvents="none">
        <Text className="text-gray-400">{ctrlKey} + K</Text>
      </InputRightElement>
    </InputGroup>
  );
};

export default InputSearch;
