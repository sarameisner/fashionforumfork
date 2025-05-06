// src/pages/_app.js
import "@/styles/globals.css";
import MenuD from "@/components/MenuD";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MenuD />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
