import { readFile } from "fs/promises";
import { WORK_INDEX_DIR } from "../../constant";

export default async function getWorkIndex(): Promise<Record<string, string>> {
  return readFile(WORK_INDEX_DIR, {
    encoding: "utf-8",
  }).then(JSON.parse);
}
