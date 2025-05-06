"use client"
import Knap1 from "../components/Knap1"
import Cards from "@/components/Card";
import HeroSlide from "@/components/HeroSlide";
import Footer from "@/components/Footer";
import MidtCards from "@/components/MidtCard";
import MostReads from "@/components/MostReads"


export default function Home() {
  return (
    <>
      <div className="lg:ml-[60px] lg:mr-[240px]">
        <HeroSlide />
        <h2 className="pt-10 pb-10 ">Nyeste nyheder</h2>

        <Cards minId={4} maxId={9} />
        <MidtCards minId={10} maxId={10}/>
        <div className="pt-20">
          <h2 className="pb-10">Fashion Forum på lyd</h2><Cards minId={11} maxId={13}/>
          <Knap1 text="Se alle" link="/podcast"/></div>

          <MostReads minId={14} maxId={19}/>
          <h2 className="pb-10 pt-20">Flere nyheder</h2><Cards minId={20} maxId={25} />
        <Footer/>
      </div>
    </>
  );
}
