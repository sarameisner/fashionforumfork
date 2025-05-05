import "@/styles/globals.css";
import '@/styles/globals.css';
import MenuD from '@/components/MenuD';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MenuD />
      <Component {...pageProps} />
    </>
  );
}