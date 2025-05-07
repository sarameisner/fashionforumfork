"use client"
import Knap1 from "../components/Knap1"
import Cards from "@/components/Card";
import HeroSlide from "@/components/HeroSlide";
import Footer from "@/components/Footer";
import MidtCards from "@/components/MidtCard";
import MostReads from "@/components/MostReads"
import News from "@/components/NewsLetter";
import { useState } from "react";
import JobCards from "@/components/JobCard";


export default function Home() {
  const [selectedTag, setSelectedTag] = useState("Alle artikler");
  return (
    <>
      <div className="  lg:ml-[60px] lg:mr-[240px]">
        <HeroSlide />
        <h2 className="pt-10 pb-10 ">Nyeste nyheder</h2>

        <Cards categori="" minId={4} maxId={9} selectedTag={selectedTag}/>
        <MidtCards minId={10} maxId={10}/>
        <div className="pt-20">
          <h2 className="ml-5 sm:m-0 pb-10">Fashion Forum på lyd</h2><Cards categori="" minId={11} maxId={13} selectedTag={selectedTag}/>
          <Knap1 text="Se alle" link="/podcast"/></div>
          <div className="mb-20"><JobCards  minId={5} maxId={8} designColor="#E6E5E5"/>
          <Knap1 text="Se alle" link="/jobportal"/></div>
          <MostReads minId={14} maxId={19}/>
          <h2 className="pb-10 pt-20">Flere nyheder</h2><Cards categori="" minId={20} maxId={25} selectedTag={selectedTag}/>
          <News/>
        <Footer/>
      </div>
    </>
  );
}
