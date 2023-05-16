"use client";
import "./globals.css";
import { Lora } from "next/font/google";
import Header from "@/components/Header";
import ChakraProvider from "../providers/ChakraProvider";
import TextBoardProvider from "@/providers/TextBoardProvider";

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
      <body className={lora.className}>
        <header className="px-6 pt-6">
          <Header />
        </header>
        <ChakraProvider>
          <TextBoardProvider>{children}</TextBoardProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
