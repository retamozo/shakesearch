"use client"
import useTextBoardContext from "@/hooks/useTextBoardContext";
import React, { FunctionComponent } from "react";

const Text: FunctionComponent = () => {
  const { highlightedText } = useTextBoardContext();
  return (
    <div
      className="overscroll-contain"
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    ></div>
  );
};

export default Text;
