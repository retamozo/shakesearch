import React, {
  createElement,
  Fragment,
  FunctionComponent,
  memo,
  ReactNode,
  useContext,
  useState,
} from "react";
import QuickLookup from "../QuickLookup";
import { TextBoardContext } from "@/providers/TextBoardProvider";

type HighlightProps = {
  text: string;
  highlight: string;
};

const Text: FunctionComponent<{ content: string[] }> = ({ content }) => {
  const {
    value: highlight,
    matchCount,
    onChange,
  } = useContext(TextBoardContext);

  const [text, setText] = useState("");

  return (
    <>
      {content.map((chunk, i) => {
        return (
           <Fragment key={i}>
            <Hightlight text={chunk} highlight={text} />
          </Fragment>
        );
      })}
      <QuickLookup onChange={(e) => setText(e.target.value)} matchCount={0} />
    </>
  );
};

const Hightlight: FunctionComponent<HighlightProps> = memo(
  ({ text, highlight }) => {
    const h = useHighlight(text, highlight);
    // console.log("matchCount", matchCount);
    return <p className="p-2">{h}</p>;
  }
);

const useHighlight = (
  text: string,
  highlight: string
) => {
  // if (!highlight) return text;
  const lowerCaseText = text.toLowerCase();
  const lowerCaseHighlight = highlight.toLowerCase();
  const parts = [];
  let startIndex = 0;
  let matchCount = 0;

  while (startIndex < text.length) {
    const nextIndex = lowerCaseText.indexOf(lowerCaseHighlight, startIndex);
    if (nextIndex === -1) {
      parts.push(text.substring(startIndex));
      console.log("parts lenght ===>", parts);
      break;
    }

    parts.push(text.substring(startIndex, nextIndex));

    parts.push(
      createElement(
        "span",
        {
          key: startIndex,
          className: "bg-yellow-300",
        },
        text.substring(nextIndex, nextIndex + highlight.length)
      )
    );
    matchCount++;
    startIndex = nextIndex + highlight.length;
  }

  return parts
};

//    return <p className="p-2">{highlightedText}</p>
//   if (!Boolean(highlight)) return <p className="p-2">{text}</p>;
//   const escapedSearchText = escapeRegex(highlight);
//   const regex = new RegExp(`(${escapedSearchText})`, "gi");
//   const chunks = text.split(regex);

//   // useEffect(() => {
//   //   if (!Boolean(matchCount)) {
//   //     console.log("empty");
//   //   }
//   // }, [matchCount]);

//   return (
//     <p className="p-2">
//       {chunks.map((paragraph, i) => {
//         // const key = uuidv4();
//         return (
//           <Fragment key={i}>
//             {paragraph.toLocaleLowerCase() === highlight.toLocaleLowerCase() ? (
//               <span
//                 // ref={(markRef) => refsById(key, markRef)}
//                 data-position-indicator={i}
//                 className="bg-cyan-100 font-bold"
//               >
//                 {paragraph}
//               </span>
//             ) : (
//               paragraph
//             )}
//           </Fragment>
//         );
//       })}
//     </p>
//   );
// };
export default Text;
