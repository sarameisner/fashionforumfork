// src/pages/_app.js
import "@/styles/globals.css";
import "@/styles/globals.css";
import MenuD from "@/components/MenuD";
import MenuM from "@/components/MenuM";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="hidden lg:block">
        <MenuD />
      </div>
      <div className="block lg:hidden">
        <MenuM />
      </div>

      <Component {...pageProps} />
    </>
  );
}
