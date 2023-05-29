const convertToTitleCase = (str: string) =>
  str
    .slice(0)
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

export default convertToTitleCase;
