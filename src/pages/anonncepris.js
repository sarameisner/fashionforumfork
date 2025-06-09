// vores annoncepriser som er en del af undermenuen inde på jobportal
"use client";
import Head from "next/head";
import UndermenuJob from "@/components/UndermenuJob";
import Footer from "@/components/Footer";
import PrisCard from "@/components/PrisCard";
import PrisCard2 from "@/components/PrisCard2";
import NewsLetter from "@/components/NewsLetter"
import Contact from "@/components/Contact";

const Anonncepris = () => {
  return (
    <>
      <Head>
        <title>Annoncepriser</title>
        <meta name="description" content="Find aktuelle jobopslag i mode-, beauty- og livsstilsbranchen. Din karriere starter her." />
      </Head>
      <div className="lg:ml-[300px]">
        <UndermenuJob />
        <h2 className="pl-5 mb-10 mt-10">Annonce priser</h2>
        <p className="pl-5 max-w-[1000px] mb-10">Nå ud til relevante kandidater i modebranchen med en jobannonce på Fashion Forum. Vælg mellem fleksible annoncepakker med høj synlighed, og få personlig support gennem hele processen.<br></br> <br></br>

Uanset hvilken løsning du vælger, skal annoncen sendes til job@fashionforum.dk sammen med logo og evt. billede.<br></br>
Har du spørgsmål, eller ønsker du hjælp til opsætning og valg af løsning, er du altid velkommen til at kontakte os. Vi står klar til at hjælpe med at få din annonce live – ofte samme dag, vi modtager den.</p>
        <div className="lg:grid flex flex-col  gap-10 ml-5 mr-2">
          <PrisCard titel="Praktikannonce"  beskrivelse="Få fat i branchens næste talent – nemt og effektivt

Er din virksomhed på udkig efter en praktikant eller studiemedhjælper med passion for mode, livsstil eller digitalt design? Med vores populære praktikannonce får du målrettet eksponering over for branchens unge talenter – hurtigt, nemt og prisvenligt." 
overskrift1="Derfor skal du vælge en praktikannonce hos Fashion Forum:" 
prob1="30 dages online synlighed på Danmarks førende medie for mode- og livsstilsbranchen" 
prob2="Placering under “Praktik”-kategorien, hvor studerende aktivt søger muligheder" 
prob3="Mulighed for logo og billede – vis jeres visuelle identitet og brandkultur frem" 
prob4="Hurtig live-publicering – vi går i luften samme dag, vi modtager jeres materiale"
overskrift2="Sådan fungerer det:"
prob5="Du sender blot annoncetekst, logo og evt. billede til job@fashionforum.dk, og så klarer vi resten."
prob6="Har du brug for sparring eller hjælp til opsætningen, hjælper vi naturligvis gerne."
pris="1.600 DKK (ekskl. moms)"
 onClick={() => alert("Valgt!")} />
    <PrisCard titel="Standardannonce" pris="3.300 DKK (eks.moms)" 
    beskrivelse="Gør jeres stilling synlig for branchens engagerede fagfolk Vores standardannonce er den mest anvendte løsning blandt virksomheder i mode- og livsstilsbranchen – og med god grund. Den egner sig både til faste stillinger og tidsbegrænsede ansættelser og er ideel, hvis du vil ramme aktive jobsøgere med erfaring og passion for branchen." 
overskrift1="Derfor skal du vælge en standardannonce hos Fashion Forum:"
prob1="30 dages online synlighed på Danmarks førende medie for mode- og livsstilsbranchen"
prob2="Placering under relevante kategori, hvor studerende aktivt søger muligheder"
prob3="Mulighed for logo og billede – vis jeres visuelle identitet og brandkultur frem"
prob4="Hurtig live-publicering – vi går i luften samme dag, vi modtager jeres materiale"
overskrift2="Sådan fungerer det:"
prob5="Du sender blot annoncetekst, logo og evt. billede til job@fashionforum.dk, og så klarer vi resten."
prob6="Har du brug for sparring eller hjælp til opsætningen, hjælper vi naturligvis gerne."
 onClick={() => alert("Valgt!")} />
          <PrisCard titel="Standardannonce med ekstra synlighed" pris="1 tilkøb: 4.300 DKK (ekskl. moms)" 
          beskrivelse="Få endnu mere eksponering og tiltræk de helt rigtige kandidater

Vil du sikre, at din jobannonce når så bredt og effektivt ud som muligt? Så er standardannoncen med tillæg den rette løsning. Her kombinerer du din standardannonce med en eller flere kanaler, der øger din synlighed markant og rammer målgruppen, dér hvor de er mest aktive."
 overskrift1="Du kan tilvælge:"
 prob1="Facebook-opslag: Vi deler annoncen i Fashion Forums følgerskare og når bredt ud til brancheinteresserede på sociale medier."
 prob2="Placering i nyhedsbrev: Få din annonce med i vores ugentlige job- og nyhedsoverblik, som sendes direkte til en stor og engageret læserskare."
 prob3="Topplacering på Fashion Forum: Din annonce bliver vist i toppen af jobsektionen, hvilket maksimerer klik og eksponering."
 overskrift2="Kombinér tilkøbene, som det passer bedst til jeres behov og budget – uanset hvad, får I 30 dages synlighed og mulighed for at styrke jeres employer brand over for målgruppen."
 pris2="2 tilkøb: 5.300 DKK (ekskl. moms)"
 pris3="3 tilkøb: 6.300 DKK (ekskl. moms)"
 onClick={() => alert("Valgt!")} />
        </div>
        <h2 className="pl-5 mb-10 mt-20">Klippekort</h2>
        <p className="pl-5 max-w-[1000px] mb-10">Vil I slå flere stillinger op over en længere periode? Så er vores klippekortløsning den oplagte mulighed. Med et klippekort får I adgang til en pakke af standardannoncer til en reduceret pris, som I kan bruge løbende – præcis når behovet opstår.</p>
        <div className="lg:grid lg:grid-cols-3 items-center justify-center flex flex-col gap-5 ml-5 mr-5">
          <PrisCard2 
          titel="3x standardannoncer" 
          pris="8.250 DKK (eks. moms)" 
          point="2.750 DKK" point2="1.650 DKK" 
           onClick={() => alert("Valgt!")} />
          <PrisCard2 titel="6x standardannoncer" pris="15.400 DKK (eks. moms)" point="2.567 DKK" point2="4.400 DKK" ekstraPris="Prisen er 18.700 DKK (eks.moms)" onClick={() => alert("Valgt!")} />
          <PrisCard2 titel="12x standardannoncer" pris="27.500 DKK (eks. moms)" point="2.292 DKK" point2="12.100 DKK" ekstraPris="Prisen er 34.100 DKK (eks.moms)" onClick={() => alert("Valgt!")} />
        </div>
        <div className="mt-20 mb-20"><Contact/></div>
        <NewsLetter/>
        
        <Footer />
      </div>
    </>
  );
};

export default Anonncepris;
