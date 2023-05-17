import Home from "@/containers/Home";
import useTextBoardContext from "@/hooks/useTextBoardContext";

async function getTextData() {
  const text = await fetch(
    "https://raw.githubusercontent.com/retamozo/shakesearch/master/completeworks.txt"
  );
  const t = await text?.text();
  return t;
}

export default async function App() {
  // const text = await getTextData();
  // console.log("text", text)
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Tenetur non odit a eos perferendis. Reiciendis, architecto.
Repellat, iure aliquid fuga nisi ratione dolore rem est eaque nemo fugiat nulla veniam`;

  return null;
}
