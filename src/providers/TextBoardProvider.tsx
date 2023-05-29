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
  openMobileDrawer: boolean;
  setOpenMobileDrawer: Dispatch<SetStateAction<boolean>>;
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

  const {
    matchCount,
    onChange,
    value,
    highlightedText,
    openMobileDrawer,
    setOpenMobileDrawer,
  } = useSearch(originalText);

  return (
    <TextBoardContext.Provider
      value={{
        value,
        matchCount,
        onChange,
        setOriginalText,
        originalText,
        highlightedText,
        openMobileDrawer,
        setOpenMobileDrawer,
      }}
    >
      {children}
    </TextBoardContext.Provider>
  );
};

export default TextBoardProvider;
