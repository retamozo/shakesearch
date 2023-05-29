import { GetPathsReturn } from "../../types-util/paths";
import getWorkIndex from "./get-work-index";

const getPathsFromFs = async (): Promise<GetPathsReturn> => {
  const indexFile = await getWorkIndex();
  const indexFileJson = await indexFile;
  const routes = Object.keys(indexFileJson).map((key) => {
    return {
      params: {
        work: key,
      },
    };
  });

  return {
    paths: [...routes],
  };
};

export default getPathsFromFs;
