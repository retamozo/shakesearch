import React, { FunctionComponent } from "react";
import getPathsFromFs from "@/lib/services/fs/get-static-paths";
import getFileInJson from "@/lib/services/fs/get-file-json";
import { TextBoard } from "@/components";
import { IWorksParams } from "@/lib/types-util/paths";
import { GetServerSideProps, GetStaticPaths, NextPage } from "next";
import { Source } from "@/lib/types-util/source";

type WorkDynamicPageProps = Source;

const Work: FunctionComponent<WorkDynamicPageProps> = ({ title, content }) => {
  return (
    <div className="relative flex flex-col w-full text-justify md:pt-0">
      <p className="py-3 text-2xl overflow-y-auto">{title}</p>
      <TextBoard content={content} />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { paths } = await getPathsFromFs();
  return {
    paths: [...paths],
    fallback: true,
  };
};

export const getStaticProps: GetServerSideProps = async ({ params }) => {
  const { work: work_id } = params as IWorksParams;

  const content = await getFileInJson(`${work_id}.json`).catch((e) => ({
    empty: true,
  }));

  return {
    props: { ...content },
  };
};

const Wrapper: NextPage<Source & { empty: boolean }> = (props) => {
  if (props?.empty) return <p>not available</p>;
  return <Work {...props} />;
};

export default Wrapper;
