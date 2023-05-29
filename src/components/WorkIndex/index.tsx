import React, { FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import { GetStaticProps } from "next";
import fetcher from "@/utils/fetcher";
import useSWR from "swr";
import { Spinner } from "@chakra-ui/react";

type WorkIndexProps = {
  onIndexClick?: () => void;
};

type Props = {};

const WorkIndex: FunctionComponent<WorkIndexProps> = ({ onIndexClick }) => {
  const { push } = useRouter();

  const { data, error, isLoading } = useSWR("/api/static-data", fetcher);

  if (error) return <p>error</p>;

  if (isLoading)
    return (
      <div className="h-full flex flex-col justify-center">
        <Spinner
          size="xl"
          colorScheme="cyan"
          thickness="2px"
          speed="0.65s"
          className="mx-auto"
        />
      </div>
    );

  return (
    <ul className="flex flex-col pl-4">
      {Object.keys(data).map((key, i) => {
        return (
          <li
            key={key}
            role="option"
            className="pl-2 py-1 text-left w-full hover:border-b border-b-2 border-transparent transition duration-200 ease-in-out hover:border-gray-500 cursor-pointer"
            aria-selected={Boolean(i)}
            onClick={(e) => {
              onIndexClick?.();
              push(`/${key}`);
            }}
          >
            {i + 1}. {data[key as keyof typeof data]}
          </li>
        );
      })}
    </ul>
  );
};

export default WorkIndex;
