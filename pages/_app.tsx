import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head"; 

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />;
  return (
    <>
      <Head>
        <title>Ryuichi Kozaki</title> 
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Component {...pageProps} />
    </>
  );
}
