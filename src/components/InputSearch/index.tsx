import React, { useEffect, useRef, useState } from "react";
import {
  Input,
  InputGroup,
  Text,
  InputRightElement,
  useDisclosure,
  Box,
  Fade,
} from "@chakra-ui/react";
import useCommandShortcut from "@/hooks/useCommandShortcut";
import useTextBoardContext from "@/hooks/useTextBoardContext";
import WorksFilterList from "./WorksFilterList";

const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [shortcutIndicator, setShortcutIndicator] = useState("");
  const { isOpen, onToggle } = useDisclosure();

  useCommandShortcut(inputRef);

  const { value, onChange } = useTextBoardContext();

  useEffect(() => {
    const ctrlKey = navigator?.userAgent.indexOf("Mac") != -1 ? "⌘" : "Ctrl";
    setShortcutIndicator(ctrlKey);
  }, []);

  return (
    <>
      <InputGroup>
        <Input
          ref={inputRef}
          name="input-search"
          value={value}
          onChange={onChange}
          size={"md"}
          type="text"
          placeholder="Search ..."
          onFocus={() => onToggle()}
          onBlur={() => onToggle()}
        />
        <InputRightElement className="mx-2" width={"4rem"} pointerEvents="none">
          <Text className="text-gray-400">{shortcutIndicator} + K</Text>
        </InputRightElement>
      </InputGroup>
      {/* <Fade in={true}>
        <WorksFilterList />
      </Fade> */}
    </>
  );
};

export default InputSearch;
