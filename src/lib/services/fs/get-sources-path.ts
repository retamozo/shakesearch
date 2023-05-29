import { readdir } from "fs/promises";

async function getSourcePaths(): Promise<string[]> {
  const existentSources = await readdir(`src/text/sources`, {
    withFileTypes: true,
  }).then((dirent) => {
    return dirent.map(({ name }) => name);
  });

  return existentSources;
}

export default getSourcePaths;
