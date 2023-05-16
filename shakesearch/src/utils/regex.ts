export const REGEX_WORD_CASE_SENSITIVE = /[.*+?^${}()|[\]\\]/gi;

export const REGEX_WORD_NO_CASE_SENSITIVE = /[.*+?^${}()|[\]\\]/g;

export const ESCAPE_MATCH = "\\$&";

export const escapeRegex = (str: string) => {
  return str.replace(REGEX_WORD_CASE_SENSITIVE, ESCAPE_MATCH);
};
