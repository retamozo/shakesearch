import "./globals.css";
import { Lora } from "next/font/google";
import Header from "@/components/Header";
import ChakraProvider from "../providers/ChakraProvider";
import TextBoardProvider from "@/providers/TextBoardProvider";
import { ReactNode } from "react";
import { Footer } from "@/components";

const lora = Lora({
  subsets: ["latin"],
});

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <title>Shakesearh app</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <ChakraProvider>
        <TextBoardProvider>
          <body className={`${lora.className} h-screen flex flex-col`}>
            <header className="px-6 pt-6 md:container md:mx-auto">
              <Header />
            </header>
            <main className="flex-grow md:container md:mx-auto px-6">
              {children}
            </main>
            <footer className="h-8">
              <Footer />
            </footer>
          </body>
        </TextBoardProvider>
      </ChakraProvider>
    </html>
  );
}
