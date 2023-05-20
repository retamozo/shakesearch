import { escapeRegex } from "@/utils/regex";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

const useSearch = (originalText: string) => {
  const [searchText, setSearchText] = useState("");
  const [matchCount, setMatchCount] = useState(0);
  const [highlightedText, setHighlightedText] = useState(originalText);
  const [openMobileDrawer, setOpenMobileDrawer] = useState(false);

  const onMatch = useCallback(
    (value: string): number => {
      if (!Boolean(value)) return 0;
      const escapedSearchText = escapeRegex(value);
      const regex = new RegExp(`(${escapedSearchText})`, "gi");
      const matches = originalText.match(regex);
      return matches ? matches.length : 0;
    },
    [originalText]
  );

  const highlightText = useCallback(
    (value: string) => {
      const escapedSearchText = escapeRegex(value);
      const regex = new RegExp(`(${escapedSearchText})`, "gi");
      return originalText.replace(regex, "<mark>$1</mark>");
    },
    [originalText]
  );

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const newHighlightedText = highlightText(value);
      const newMatches = onMatch(value);
      setSearchText(value);
      setHighlightedText(() => newHighlightedText);
      setMatchCount(() => newMatches);
    },
    [highlightText, onMatch]
  );

  useEffect(() => {
    if (!Boolean(searchText)) {
      setHighlightedText(originalText);
    }
  }, [originalText, searchText]);

  return {
    value: searchText,
    onChange: onChange,
    matchCount,
    highlightedText,
    openMobileDrawer,
    setOpenMobileDrawer,
  };
};

export default useSearch;
