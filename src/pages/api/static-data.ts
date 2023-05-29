import getWorkIndex from "@/lib/services/fs/get-work-index";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const workIndex = await getWorkIndex();
  // TODO: investigate why .json does not convert file.
  res.status(200).json(workIndex);
}
