// src/pages/_app.js
// her importerer vi global CSS, så styling gælder på hele sitet
import "@/styles/globals.css";
// de to forskellige menuer, mobil og desk
import MenuD from "@/components/MenuD";
import MenuM from "@/components/MenuM";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" type="image/png" />
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
