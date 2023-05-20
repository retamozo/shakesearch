"use client";
import Link from "next/link";
import React from "react";
import InputSearch from "../InputSearch";
import MobileSearch from "../MobileSearch";

const Header = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between">
          <Link href="/" className="text-xl underline underline-offset-4">
            The Complete Works of William Shakespeare
          </Link>
          <div className="md:hidden">
            <MobileSearch />
          </div>
          <div className="hidden md:flex md:flex-col md:w-1/2 relative">
            <InputSearch />
          </div>
        </div>
      </nav>
      <h2 className="pt-2.5 text-sm">
        A Gutenberg Literary Archive Foundation initiative
      </h2>
    </>
  );
};

export default Header;
