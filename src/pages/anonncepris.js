'use client'
import Head from "next/head"
import UndermenuJob from "@/components/UndermenuJob";
import Footer from "@/components/Footer";
import PrisCard from "@/components/PrisCard";

const Anonncepris = () => {
    return (  <><Head>
        <title>Annoncepriser</title>
        <meta name="description" content="Find aktuelle jobopslag i mode-, beauty- og livsstilsbranchen. Din karriere starter her." />
      </Head>
        <div className="lg:ml-[300px]"> 
            <UndermenuJob/>
            <div className="lg:grid lg:grid-cols-3 items-center justify-center flex flex-col gap-10 ml-2 mr-2"> 
            <PrisCard
  titel="Praktikannonce"
  pris="1.600 DKK (eks. moms)"
  varighed="Max 30 dage"
  tidspunkt=""
  beskrivelse="Det skal fremgå af annoncen, at stillingen er tidsbegrænset og henvendt til studerende."
  ekstraPris="Prisen er 1.950 DKK (eks.moms)"
  onClick={() => alert('Valgt!')}
/>
<PrisCard
  titel="Standardannonce"
  pris="3.300 DKK (eks.moms)"
  varighed="Max 30 dage"
  tidspunkt=""
  beskrivelse=""
  ekstraPris="Prisen er 3.950 DKK (eks.moms)"
  onClick={() => alert('Valgt!')}
/>
<PrisCard
  titel="Standardannonce med tilkøb"
  pris="Fra 4.300 DKK (eks. moms)"
  varighed="Max 30 dage"
  tidspunkt="Ønsker du at høre mere om tilkøb kontakt os."
  beskrivelse=""
  ekstraPris="Prisen er 4.950 DKK (eks.moms)"
  onClick={() => alert('Valgt!')}
/>
</div>
    <Footer/>
            </div>
            </>);
}
 
export default Anonncepris;