import React, { FunctionComponent } from "react";

const Text: FunctionComponent<{ text: string }> = ({ text }) => {
  return <div>{text}</div>;
};

export default Text;
