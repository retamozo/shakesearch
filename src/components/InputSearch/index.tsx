import React, { useEffect, useRef, useState } from "react";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import useTextBoardContext from "@/hooks/useTextBoardContext";
import { Kbd } from "@chakra-ui/react";
import useCtrlKeyCombination from "@/hooks/useCtrlKeyCombination";

const InputSearch = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [shortcutIndicator, setShortcutIndicator] = useState("");

  const { value, onChange } = useTextBoardContext();

  useEffect(() => {
    const ctrlKey = navigator?.userAgent.indexOf("Mac") != -1 ? "⌘" : "Ctrl";
    setShortcutIndicator(ctrlKey);
  }, []);

  useCtrlKeyCombination("k", () => {
    inputRef?.current?.focus();
  });

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
          placeholder="Search through the whole work..."
        />
        <InputRightElement
          className="mx-2"
          width={"max-content"}
          pointerEvents="none"
        >
          <Kbd>{shortcutIndicator} + K </Kbd>
        </InputRightElement>
      </InputGroup>
      {/* <Fade in={true}>
        <WorksFilterList />
      </Fade> */}
    </>
  );
};

export default InputSearch;
