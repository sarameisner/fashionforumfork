import DiagonalStripe from "@/components/Design";
import Cards from "@/components/Card";
import HeroSlide from "@/components/HeroSlide";

export default function Home() {
  return (
    <>
    <div className="lg:ml-[60px] lg:mr-[240px]">
    <HeroSlide/>
    <h2 className="pt-10 pb-10 ">Nyeste nyheder</h2>
      
<Cards/>
<DiagonalStripe color="#FFE3F5" height="350px" />
</div>  
    </>
 
  );
}
