import { InputSearch } from "@/components";
import StaticHome from "@/components/StaticHome";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/2">
        <StaticHome />
      </div>
      <div className="hidden md:flex md:w-1/2">
        {/* <InputSearch /> */}
      </div>
    </div>
  );
};

export default Main;
