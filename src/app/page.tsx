import Head from "next/head";
import Image from "next/image";
import NavbarPage from "./components/navbar/page";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated" />
        <link rel="stylesheet" href="/favicon.ico " />

      </Head>
      <NavbarPage />
    </div>
  );
}
