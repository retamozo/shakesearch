import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <Link href="/" className="text-xl underline underline-offset-4">
        Shakesearch
      </Link>
      <h2 className="pt-2">All Shakespare&apos;s collection in one place.</h2>
    </div>
  );
};

export default Header;
