import { Html, Head, Main, NextScript } from "next/document";
("");

export default function Document() {
  return (
    // her har vi sat sproget til dansk
    <Html lang="dk">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
