// src/pages/_app.js
import "@/styles/globals.css";
import "@/styles/globals.css";
import MenuD from "@/components/MenuD";
import MenuM from "@/components/MenuM";

export default function App({ Component, pageProps }) {
  return (
    <>
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
