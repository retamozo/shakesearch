import useTextBoardContext from "@/hooks/useTextBoardContext";
import React from "react";

const Matches = () => {
  const { matchCount } = useTextBoardContext()
  return <div>matchs {matchCount}</div>;
};

export default Matches;
