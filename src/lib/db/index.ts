import { create, Document, getByID, insert, search } from "@orama/orama";
import getFileInJson from "../services/fs/get-file-json";
import getSourcePathsJson from "../services/fs/get-sources-path";
import { Source } from "../types-util/source";

const shakespeareDb = await create({
  schema: {
    title: "string",
    path: "string",
    kind: "string",
    content: "string[]",
    id: "string",
  },
  components: {
    afterInsert: (_, id, _r) => {
      console.log("---INSERTED", id);
    },
  },
});

export const startDb = async () => {
  const data = await getSourcePathsJson();

  const filePromises = data.map((dir) => getFileInJson(dir));

  Promise.allSettled<Source>(filePromises).then((sources) => {
    sources.map((file) => {
      if (file.status === "fulfilled") {
        console.log("=----FILE", file.value);
        indexDocument(file.value);
      }
    });
  });

  async function indexDocument(dir: Document) {
    try {
      await insert(shakespeareDb, dir);
    } catch (e) {
      throw new Error(`Error indexing sources to Orama DB: ${e}`);
    }
  }
};

await startDb();

const searchResult = await search(shakespeareDb, {
  term: "Gutenberg",
  properties: ["content", "title", "kind"],
});

const q = await getByID(shakespeareDb, "17710896-6");

console.log("q", q);
