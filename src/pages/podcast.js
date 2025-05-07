import Footer from "@/components/Footer";
import UndermenuPod from "@/components/UndermenuPod";
import Design from "@/components/Design";
import PodcastCard from "@/components/PodcastCard";
import News from "@/components/NewsLetter";
export default function Podcast() {
    return (
      <div className="lg:ml-[240px] lg:mr-[50px]">
        <Design color="#D3EEFF" height="350px" position="20%"/>
 <div className=" flex-col lg:flex-row items-center lg:flex sm:items-start gap-10 ">
  {/* Venstre: Video */}
  <div >
  <button
    onClick={() => window.open('/podcast.mp4', '_blank')}
    className="w-full block cursor-pointer"
  >
    <video
      src="/podcast.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-[250px] object-cover lg:h-[600px] sm:w-full m-auto"
    />
 </button>
</div>

  {/* Højre: Menu */}
  <div className="flex w-full lg:w-[700px] flex-col ">
    <UndermenuPod />
    <div className="w-full p-5 pt-10" ><p>11.04.25 - Mode</p>
    <h1 className="text-xl md:text-4xl font-bold pt-5 pb-5" >55. Hvem bestemmer, hvad Medina skal have på?</h1>
    <p>Når Medina skal finde ud af, hvad hun skal have på, finder hun nogle gange svaret i en drøm, andre gange kaster hun sig bare ind i skabet og ser, hvad der sker. Hvis en stylist prøver at blande sig, rammer de sjældent plet. I denne episode taler vi med popikonet Medina om dengang, hun brugte alle sine sparepenge på den helt rigtige scenejakke, at lande i sin krop midt i en graviditet og ikke mindst hendes aktuelle skosamarbejde.
    </p></div>
  </div>

  
</div>
<div className="p-5 pt-20 pb-10">
    <h2>Seneste podcast</h2>
  </div>
  <div className="grid justify-center  sm:grid sm:grid-cols-2">
        
        <PodcastCard  imageSrc="https://fashionforum.dk/wp-content/uploads/2024/08/ss25-copenhagen-fashion-week-rotate-runway-2x3-james-cochrane-31-scaled.jpg"
  date="12.08.25 - Fashion"
  title="54. Rotate's pinch me-moments: Copenhagen Fashion Week SS24"
  content="Ovenpå en begivenhedsrig modeuge med butiksåbning og finaleshow besøger Thora Valdimars og Jeanette Madsen Fashion Forum på lyd til en snak om strategien bag butiksåbningen, deres modelcast og ikke mindst Pamela Anderson på første række."
  spotifyLink="https://open.spotify.com/episode/0YnVfYC0f2oISmintw1AlR?si=WNrORnucQNuNBdf85X1oXQ"
  appleLink="https://podcasts.apple.com/dk/podcast/54-rotates-pinch-me-moments-copenhagen-fashion-week-ss25/id1607539242?i=1000665122531"
  podimoLink="https://share.podimo.com/s/HF0upTEq"/>
  <PodcastCard imageSrc="https://fashionforum.dk/wp-content/uploads/2024/08/photographer-rasmus-skousen-scaled.jpg"
  date="02.08-24 - Mode"
  title="53. Fra modemedie til modebrand: Malene Mallings nye vinkel"
  content="Malene Malling har som tidligere forlægger på Cover og modeskribent deltaget i flere modeuger end de fleste, men for første gang skal hun ikke være med som gæst – i stedet skal hun præsentere sit slowfashion-brand La Bagatelle. Hør, hvad hun har at sige om det – og i øvrigt også, hvorfor hun i sin tid blev godt og grundigt træt af præmisserne for at drive et modemagasin.
"
  spotifyLink="hhttps://open.spotify.com/episode/6kjW7qqW6PhB1PCPs8TrJc?si=CZoXko_7TrK-p_TZaMGS3g"
  appleLink="https://podcasts.apple.com/dk/podcast/fashion-forum-p%C3%A5-lyd/id1607539242?i=1000664113738"
  podimoLink="https://share.podimo.com/s/UWF0dFPP"/>
        <PodcastCard imageSrc="https://fashionforum.dk/wp-content/uploads/2023/01/nicolaj-reffstrup-1-1-scaled.jpg"
  date="12.06.24 - Mode"
  title="52. Skal alle gøre som Ganni?"
  content="Med en ny bog fremlægger co-founder af Ganni Nicolaj Reffstrup arbejdstegningerne til brandets indsats for samtidig vækst og ansvarlighed. Men hvordan er det egentlig at være medejer af en af tidens mest succesfulde modevirksomheder og samtidig være mere klimabevidst end de fleste? Dét taler vi med ham om i denne episode af Fashion Forum på lyd."
  spotifyLink="https://open.spotify.com/episode/2AoLlZOxxsSYGH6kd8Toty?si=abaa9e610e2b4971"
  appleLink="https://podcasts.apple.com/dk/podcast/fashion-forum-p%C3%A5-lyd/id1607539242?i=1000658696431"
  podimoLink="https://share.podimo.com/s/418i14FO"/>
        <PodcastCard imageSrc="https://fashionforum.dk/wp-content/uploads/2024/05/elle-forside.jpeg"
  date="30.05.24 - Beauty"
  title="51. Hvad er nyt i det nye Elle?"
  content="Efter knap 16 år har Aller valgt at opsige sin licensaftale med ELLE. Nu står Toast Projects med Cecilie Ingdahl, Josephine Aarkrogh og Nikita Hoffman i spidsen klar til at være udgivere på det magasin, de har været en del af længe. Men hvordan udgiver man egentlig et magasin, når man ikke er del af […]"
  spotifyLink="https://open.spotify.com/episode/43ds3MX7GDXVs0rxP3tkLj?si=xXMtqFlWTD-dkFOEOHmYmQ"
  appleLink="https://podcasts.apple.com/dk/podcast/fashion-forum-p%C3%A5-lyd/id1607539242?i=1000657219328"
  podimoLink="https://share.podimo.com/s/pPNph8Wy"/>
        </div>
        <News/>
        <Footer></Footer>
      </div>
    );
  }

