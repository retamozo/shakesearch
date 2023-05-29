import { GetStaticPathsResult } from "next";
import { ParsedUrlQuery } from "querystring";

export interface IWorksParams extends ParsedUrlQuery {
  work: string;
}

export interface GetPathsReturn
  extends Omit<GetStaticPathsResult<IWorksParams>, "fallback"> {}

export type GetSourcePathsReturn = Record<"name", string>;
