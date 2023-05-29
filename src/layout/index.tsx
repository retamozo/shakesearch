import Header from "@/components/Header";
import { ReactNode } from "react";
import { Footer, WorkIndex } from "@/components";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: ReactNode;
};

const scroll =
  "md:w-full md:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 scrollbar-thumb-rounded md:pr-12";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className={`${lora.className} h-screen flex flex-col`}>
      <header className="px-6 pt-6 md:container md:mx-auto">
        <Header />
      </header>
      <main className="pt-2 flex-grow md:container md:mx-auto md:h-4/5 ">
        <div className="flex w-full md:justify-between h-3/4 md:h-full">
          <div className="flex flex-col md:flex-row md:w-full">
            <div className="hidden md:flex md:w-2/5">
              <div className={scroll}>
                <WorkIndex />
              </div>
            </div>
            <div className="px-6 md:flex md:w-3/5">
              <div className={scroll}>{children}</div>
            </div>
          </div>
        </div>
      </main>
      <footer className="h-10 py-2">
        <Footer />
      </footer>
    </div>
  );
}
