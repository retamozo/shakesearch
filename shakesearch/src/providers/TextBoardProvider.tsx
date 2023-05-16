"use client";

import useSearch from "@/hooks/useSearch";
import React, {
  ChangeEvent,
  createContext,
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type TTextBoardContext = {
  value: string;
  matchCount: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setOriginalText: Dispatch<SetStateAction<string>>;
  highlightedText: string;
  originalText: string;

};

export const TextBoardContext = createContext<TTextBoardContext>(
  {} as TTextBoardContext
);

const TextBoardProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [originalText, setOriginalText] = useState("");
 
  const { matchCount, onChange, value , highlightedText} = useSearch(originalText);

  return (
    <TextBoardContext.Provider
      value={{
        value,
        matchCount,
        onChange,
        setOriginalText,
        originalText,
        highlightedText
      }}
    >
      {children}
    </TextBoardContext.Provider>
  );
};

export default TextBoardProvider;
