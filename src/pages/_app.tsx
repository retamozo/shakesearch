import Head from "next/head";
import Layout from "@/layout";
import type { AppProps } from "next/app";
import TextBoardProvider from "@/providers/TextBoardProvider";
import { ChakraProvider } from "@chakra-ui/react";
import "./globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <TextBoardProvider>
        <Head>
          <title>Shakesearch</title>
          <meta name="title" content="Shakesearch" />
          <meta
            name="description"
            content="A minimal, clean and beautiful website to help Shakespeare fans to find your beautiful works."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://shakesearch.vercel.app/" />
          <meta property="og:title" content="Shakesearch" />
          <meta
            property="og:description"
            content="A minimal, clean and beautiful website to help Shakespeare fans to find your beautiful works."
          />
          <meta
            property="og:image"
            content="https://i.imgur.com/vNg2OmF.jpeg"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://shakesearch.vercel.app/"
          />
          <meta property="twitter:title" content="Shakesearch" />
          <meta
            property="twitter:description"
            content="A minimal, clean and beautiful website to help Shakespeare fans to find your beautiful works."
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/vNg2OmF.jpeg"
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet preload prefetch"
            href="/fonts/poppins-v12-latin-300.woff2"
            as="style"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet preload prefetch"
            href="/fonts/poppins-v12-latin-600.woff2"
            as="style"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet preload prefetch"
            href="/fonts/poppins-v12-latin-regular.woff2"
            as="style"
            crossOrigin="anonymous"
          />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TextBoardProvider>
    </ChakraProvider>
  );
}

export default MyApp;
