import Link from "next/link";
import React from "react";
import appendix from "../../../appendix.json";

const Nav = () => {
  return (
    <>
      <div className="flex flex-col pl-4 overflow-y-auto">
        {Object.keys(appendix).map((key, i) => {
          return (
            <div className="flex w-full" key={key}>
              <div className="w-1/12 py-1">{i + 1}.</div>
              <div className="pl-2 py-1 text-left w-full">
                <Link
                  className="hover:border-b border-b-2 border-transparent transition duration-200 ease-in-out hover:border-gray-500"
                  href={key}
                >
                  {appendix[key as keyof typeof appendix]}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Nav;
