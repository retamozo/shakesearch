import { WorkIndex } from "@/components";
import React, { FunctionComponent, ReactNode } from "react";

const Layout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-row justify-between">
      <div className="hidden md:flex">
        <WorkIndex />
      </div>
      {children}
    </div>
  );
};

export default Layout;
