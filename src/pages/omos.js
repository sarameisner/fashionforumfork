"use client";
import Head from "next/head";
import Footer from "@/components/Footer";
import News from "@/components/NewsLetter";
import Design from "@/components/Design";
import Redaktion from "@/components/Redaktion";
import Quote from "@/components/Quote";
import AboutText from "@/components/AboutText";

export default function OmOs() {
  return (
    <>
      <Head>
        <title>Om os – Fashion Forum</title>
        <meta name="description" content="Læs om hvem vi er hos Fashion Forum – Danmarks førende digitale medie og jobportal for modebranchen." />
      </Head>
      <div className=" lg:ml-[60px] lg:mr-[230px]"><Redaktion />
      <Quote />
      <AboutText />
      <News />
      <Footer /></div>
    </>
  );
}
