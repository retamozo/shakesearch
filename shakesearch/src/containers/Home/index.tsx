"use client";
import { LeftSidebar, RightSidebar, TextBoard } from "@/components";
import useTextBoardContext from "@/hooks/useTextBoardContext";
import React, { FunctionComponent, useEffect } from "react";

const Home: FunctionComponent<{ text: string }> = ({ text }) => {
  const { setOriginalText } = useTextBoardContext();
  useEffect(() => {
    console.log("infinto");
    if (text) {
      setOriginalText(text);
    }
  }, [setOriginalText, text]);

  return (
    <>
      <div className="row-span-full">
        <LeftSidebar />
      </div>

      <div className="row-span-fullr">
        <TextBoard />
      </div>

      <div className="row-span-full">
        <RightSidebar />
      </div>
    </>
  );
};

export default Home;
