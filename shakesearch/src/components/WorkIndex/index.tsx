"use client"
import appendix from "../../../text/appendix.json";
import React, { FunctionComponent } from "react";
import { useRouter } from "next/navigation";

type WorkIndexProps = {
  onIndexClick?: () => void;
};

const WorkIndex: FunctionComponent<WorkIndexProps> = ({ onIndexClick }) => {
  const { push } = useRouter();
   return (
    <ul className="flex flex-col pl-4 overflow-y-auto">
      {Object.keys(appendix).map((key, i) => {
        return (
          <li
            key={key}
            role="option"
            className="pl-2 py-1 text-left w-full hover:border-b border-b-2 border-transparent transition duration-200 ease-in-out hover:border-gray-500 cursor-pointer"
            aria-selected
            onClick={(e) => {
              onIndexClick?.();
              push(key);
            }}
          >
            {i + 1}. {appendix[key as keyof typeof appendix]}
          </li>
        );
      })}
    </ul>
  );
};

export default WorkIndex;
