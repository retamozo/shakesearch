import React, {
  Fragment,
  FunctionComponent,
  useContext,
  useEffect,
} from "react";
import QuickLookup from "../QuickLookup";
import { escapeRegex } from "@/utils/regex";
import { TextBoardContext } from "@/providers/TextBoardProvider";
import { v4 as uuidv4 } from "uuid";

type HighlightProps = {
  text: string;
};

const Text: FunctionComponent<{ content: string[] }> = ({ content }) => {
  return (
    <>
      {content.map((text, i) => {
        return (
          <Fragment key={i}>
            <Hightlight text={text} />
          </Fragment>
        );
      })}
      <QuickLookup />
    </>
  );
};

const Hightlight: FunctionComponent<HighlightProps> = ({ text }) => {
  const {
    value: highlight,
    highlightRefEls,
    matchCount,
    refsById,
  } = useContext(TextBoardContext);

  if (!Boolean(highlight)) return <p className="p-2">{text}</p>;
  const escapedSearchText = escapeRegex(highlight);
  const regex = new RegExp(`(${escapedSearchText})`, "gi");
  const chunks = text.split(regex);

  useEffect(() => {
    if (!Boolean(matchCount)) {
      console.log("empty");
    }
  }, [matchCount]);

  return (
    <p className="p-2">
      {chunks.map((paragraph, i) => {
        const key = uuidv4();
        return (
          <Fragment key={key}>
            {paragraph.toLocaleLowerCase() === highlight.toLocaleLowerCase() ? (
              <mark
                ref={(markRef) => refsById(key, markRef)}
                data-position-indicator={i}
                className="rounded-full bg-cyan-100 font-bold"
              >
                {paragraph}
              </mark>
            ) : (
              paragraph
            )}
          </Fragment>
        );
      })}
    </p>
  );
};
export default Text;
