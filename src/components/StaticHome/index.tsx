import { ArrowForwardIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import React from "react";

const StaticHome = () => {
  return (
    <div className="md:pl-12 flex flex-col justify-center h-full md:text-center text-lg">
      <div className="pt-6">
        <h3 className="font-bold">Welcome to the ShakeSearch app</h3>
        <p className="text-base ">A Pulley&apos;s take-home challenge</p>
      </div>
      <div className="pt-6">
        <h3 className="font-bold">¿How the app works?</h3>
        <div className="pt-4">
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="cyan"
            variant="outline"
            className=""
          >
            Take a tour
          </Button>
        </div>
      </div>
      <div className="pt-6">
        <h3 className="font-bold">Built with:</h3>
        <ul className="text-base list-disc pl-4 md:w-3/5 mx-auto text-left pt-2">
          <li>
            <a
              href="https://github.com/oramasearch/orama"
              target="_blank"
              className="underline underline-offset-4"
            >
              Orama Search
            </a>
            , an open source, fast, in-memory, typo-tolerant, full-text search
            engine written in TypeScript.
          </li>
          <li>
            NextJS <code className="text-base">v13</code>
          </li>
          <li>Tailwind</li>
          <li>Typescript</li>
          <li>
            Deployed in Vercel <TriangleUpIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StaticHome;
