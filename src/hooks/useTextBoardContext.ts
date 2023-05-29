import { TextBoardContext } from "@/providers/TextBoardProvider";
import { useContext } from "react";

const useTextBoardContext = () => {
  const context = useContext(TextBoardContext);

  if (!context) throw new Error("TextBoardContext error");

  return context;
};

export default useTextBoardContext;
