import { LeftSidebar, RightSidebar, Text } from "@/components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

async function getTextData() {
  const text = await fetch(
    "https://raw.githubusercontent.com/retamozo/shakesearch/master/completeworks.txt"
  );
  const t = await text?.text();
  return t;
}

export default async function Home() {
  const text = await getTextData();
  return (
    <main className="flex h-screen w-full gap-y-2 px-6">
      <div className="w-1/4 h-4/5 my-auto border-r-2 mr-2 border-spacing-80 border-black border-opacity-20">
        <LeftSidebar />
      </div>
      <div className="w-1/2 h-5/6 overflow-scroll px-2 justify-center">
        <Text text={text} />
      </div>
      <div className=" w-1/4">
        <RightSidebar />
      </div>
    </main>
  );
}
