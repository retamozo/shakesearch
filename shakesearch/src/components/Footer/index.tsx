import React from "react";
import Github from "../../../public/github.svg";
import Linkedin from "../../../public/linkedin.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <ul className="flex flex-row justify-evenly items-center md:justify-start md:container md:mx-auto md:pl-6">
      <li className="cursor-pointer">
        <a href="https://www.linkedin.com/in/enzoretamozo" target="_blank">
          <Image alt="github icon" src={Linkedin} width={16} height={16} />
        </a>
      </li>
      <li className="cursor-pointer md:pl-3 mt-1">
        <a href="https://www.github.com/retamozo" target="_blank">
          <Image alt="github icon" src={Github} width={16} height={16} />
        </a>
      </li>
    </ul>
  );
};

export default Footer;
