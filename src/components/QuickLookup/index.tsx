import useTextBoardContext from "@/hooks/useTextBoardContext";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Divider,
  Input,
  InputGroup,
  InputRightElement,
  SlideFade,
} from "@chakra-ui/react";
import React from "react";

const QuickLookup = () => {
  const { onChange, matchCount } = useTextBoardContext();

  return (
    <div className="bottom-0 sticky my-0 rounded-t-lg bg-slate-200 shadow-indigo-200">
      {/* <SlideFade
        in={true}
        offsetY="20px"
        className="my-0 rounded-t-lg bg-slate-200 shadow-indigo-200"
      > */}
      <InputGroup flexDirection={"row"}>
        <Input
          type={"search"}
          onChange={onChange}
          placeholder="Lookup 🔎"
          color={"black"}
          className="w-2/3 border-transparent focus:border-transparent focus:ring-0 py-0 px-2"
        />

        <InputRightElement
          className="w-1/3 justify-start cursor-pointer"
          pointerEvents="none"
        >
          {matchCount > 0 && (
            <>
              <Divider
                orientation="vertical"
                width={"1px"}
                height={"70%"}
                background={"gray"}
              />
              <div className="flex justify-evenly w-full items-center">
                <div className="cursor-pointer">
                  <ChevronDownIcon h={7} w={7} />
                </div>
                <div className="cursor-pointer">
                  <ChevronUpIcon h={7} w={7} />
                </div>
                <div>1/22</div>
              </div>
            </>
          )}
        </InputRightElement>
      </InputGroup>
      {/* </SlideFade> */}
    </div>
  );
};

export default QuickLookup;
