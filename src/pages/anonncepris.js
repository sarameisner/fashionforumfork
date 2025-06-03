// vores annoncepriser som er en del af undermenuen inde på jobportal
"use client";
import Head from "next/head";
import UndermenuJob from "@/components/UndermenuJob";
import Footer from "@/components/Footer";
import PrisCard from "@/components/PrisCard";
import PrisCard2 from "@/components/PrisCard2";
import NewsLetter from "@/components/NewsLetter"

const Anonncepris = () => {
  return (
    <>
      <Head>
        <title>Annoncepriser</title>
        <meta name="description" content="Find aktuelle jobopslag i mode-, beauty- og livsstilsbranchen. Din karriere starter her." />
      </Head>
      <div className="lg:ml-[300px]">
        <UndermenuJob />
        <h2 className="pl-5 mb-10 mt-20">Annonce priser</h2>
        <p className="pl-5 max-w-[1000px] mb-10">Nå ud til relevante kandidater i modebranchen med en jobannonce på Fashion Forum. Vælg mellem fleksible annoncepakker med høj synlighed, og få personlig support gennem hele processen.<br></br> <br></br>

Uanset hvilken løsning du vælger, skal annoncen sendes til job@fashionforum.dk sammen med logo og evt. billede.<br></br>
Har du spørgsmål, eller ønsker du hjælp til opsætning og valg af løsning, er du altid velkommen til at kontakte os. Vi står klar til at hjælpe med at få din annonce live – ofte samme dag, vi modtager den.</p>
        <div className="lg:grid    gap-10 ml-2 mr-2">
          <PrisCard titel="Praktikannonce" pris="1.600 DKK (eks. moms)" varighed="Max 30 dage" tidspunkt="" beskrivelse="Det skal fremgå af annoncen, at stillingen er tidsbegrænset og henvendt til studerende." ekstraPris="Prisen er 1.950 DKK (eks.moms)" onClick={() => alert("Valgt!")} />
          <PrisCard titel="Standardannonce" pris="3.300 DKK (eks.moms)" varighed="Max 30 dage" tidspunkt="" beskrivelse="" ekstraPris="Prisen er 3.950 DKK (eks.moms)" onClick={() => alert("Valgt!")} />
          <PrisCard titel="Standardannonce med tilkøb" pris="Fra 4.300 DKK (eks. moms)" varighed="Max 30 dage" tidspunkt="Ønsker du at høre mere om tilkøb kontakt os." beskrivelse="" ekstraPris="Prisen er 4.950 DKK (eks.moms)" onClick={() => alert("Valgt!")} />
        </div>
        <h2 className="pl-5 mb-10 mt-20">KLippekort</h2>
        <p className="pl-5 max-w-[1000px] mb-10">Vil I slå flere stillinger op over en længere periode? Så er vores klippekortløsning den oplagte mulighed. Med et klippekort får I adgang til en pakke af standardannoncer til en reduceret pris, som I kan bruge løbende – præcis når behovet opstår.</p>
        <div className="lg:grid lg:grid-cols-3 items-center justify-center flex flex-col gap-10 ml-2 mr-2">
          <PrisCard2 titel="3x standardannoncer" pris="8.250 DKK (eks. moms)" point="2.750 DKK" point2="1.650 DKK" ekstraPris="Prisen er 9.900 DKK (eks.moms)" onClick={() => alert("Valgt!")} />
          <PrisCard2 titel="6x standardannoncer" pris="15.400 DKK (eks. moms)" point="2.567 DKK" point2="4.400 DKK" ekstraPris="Prisen er 18.700 DKK (eks.moms)" onClick={() => alert("Valgt!")} />
          <PrisCard2 titel="12x standardannoncer" pris="27.500 DKK (eks. moms)" point="2.292 DKK" point2="12.100 DKK" ekstraPris="Prisen er 34.100 DKK (eks.moms)" onClick={() => alert("Valgt!")} />
        </div>
        <NewsLetter/>
        <Footer />
      </div>
    </>
  );
};

export default Anonncepris;
