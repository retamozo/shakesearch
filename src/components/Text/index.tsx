import useTextBoardContext from "@/hooks/useTextBoardContext";
import React, { FunctionComponent } from "react";

const Text: FunctionComponent = () => {
  const { highlightedText } = useTextBoardContext();
  return (
    <p
      className="h-full"
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    ></p>
  );
};

export default Text;
