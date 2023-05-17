"use client";
import { Nav, RightSidebar, TextBoard } from "@/components";
import useTextBoardContext from "@/hooks/useTextBoardContext";
import React, { FunctionComponent, useEffect } from "react";

const Home: FunctionComponent<{ text: string }> = ({ text }) => {
  const { setOriginalText } = useTextBoardContext();
  useEffect(() => {
    if (text) {
      setOriginalText(text);
    }
  }, [setOriginalText, text]);

  return (
    <div className="flex flex-row">
      <div className="w-full overflow-y-auto h-40 ">
        <h3>Content</h3>
        <Nav />;
      </div>

      <div className="w-full">
        <TextBoard />
      </div>

      <div className="w-full overscroll-contain">
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
