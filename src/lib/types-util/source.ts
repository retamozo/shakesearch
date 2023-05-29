import { Document } from "@orama/orama";

type Kind = "sonnets";

export interface Source extends Document {
  path: string;
  title: string;
  kind: Kind | string;
  content: Content;
  characters?: Content;
  hasCaps?: boolean;
  pages?: number;
}

type Content = string | string[];
