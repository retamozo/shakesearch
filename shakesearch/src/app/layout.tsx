"use client";
import "./globals.css";
import { Lora } from "next/font/google";
import Header from "@/components/Header";
import ChakraProvider from "../providers/ChakraProvider";
import TextBoardProvider from "@/providers/TextBoardProvider";
import { LeftSidebar, RightSidebar } from "@/components";

const lora = Lora({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <body className={lora.className}>
        <header className="px-6 pt-6">
          <Header />
        </header>
        <ChakraProvider>
          <TextBoardProvider>
            <main className="flex container mx-auto">
              <LeftSidebar />
              {children}
              <RightSidebar />
            </main>
          </TextBoardProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
