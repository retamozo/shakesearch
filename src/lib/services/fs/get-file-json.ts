import { readFile } from "fs/promises";
import { Source } from "../../types-util/source";

export default async function getFileInJson(id: string): Promise<Source> {
  return readFile(`src/text/sources/${id}`, { encoding: "utf-8" }).then(
    JSON.parse
  );
}
