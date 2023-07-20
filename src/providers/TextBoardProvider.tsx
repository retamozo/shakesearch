import useTextBoardSearch from "@/hooks/useTextBoardSearch";
import React, {
  ChangeEvent,
  createContext,
  MutableRefObject,
  FunctionComponent,
  ReactNode,
} from "react";

export type TTextBoardContext = {
  value: string;
  matchCount: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  resetAllMatches: () => void;
  highlightRefEls: MutableRefObject<HTMLElement[] | null>;
};

export const TextBoardContext = createContext({} as TTextBoardContext);

TextBoardContext.displayName = "Text Board Provider";

const TextBoardProvider: FunctionComponent<{
  content: string[];
  children: ReactNode;
}> = ({ children, content }) => {
  const boardSearchProps = useTextBoardSearch(content);

  return (
    <TextBoardContext.Provider value={{ ...boardSearchProps }}>
      {children}
    </TextBoardContext.Provider>
  );
};

export default TextBoardProvider;
