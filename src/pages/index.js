
import DiagonalStripe from "@/components/Design";
import Cards from "@/components/Card";
import HeroSlide from "@/components/HeroSlide";




export default function Home() {
  return (
    <>
    <div className="ml-[60px mr-[240px]">
    <HeroSlide/>
      <DiagonalStripe color="#FFE3F5" height="350px" />
<Cards/>
</div>  
    </>
  );
}
