'use client'
import Footer from "@/components/Footer";
import Undermenu from "@/components/Undermenu";
import Cards from "@/components/Card";
import { useState } from "react";
import News from "@/components/NewsLetter";
import MidtSlide from "@/components/MidtSlide";
import MostReads from "@/components/MostReads";
import Design from "../components/Design";
import JobCards from "@/components/JobCard";
import Knap1 from "@/components/Knap1";


export default function Beauty() {
  const [selectedTag, setSelectedTag] = useState("Alle artikler");

  return (
    <div className=" lg:ml-[180px]  lg:mr-[110px]">
      <Undermenu activeTag={selectedTag} onChange={setSelectedTag} />
      <Design color="#FFE3F5" height="350px" position="20%"/>
      <MidtSlide categori="Beauty" minId={1} maxId={3} bgColor="#FFE3F5" />
      <h2 className="pt-10 pb-10 ">Seneste nyheder</h2>
      <Cards categori="Beauty" minId={4} maxId={9} selectedTag={selectedTag} />
      <div className="mb-20"><JobCards jobtype="Beauty" minId={1} maxId={2} designColor="#FFE3F5"/>
    <Knap1 text="Se alle" link="/jobportal"/></div>
      <MostReads minId={1} maxId={5} />
      <h2 className="pt-50 pb-10 ">Flere beauty nyheder</h2>
      <Cards categori="Beauty" minId={28} maxId={30} selectedTag={selectedTag} />
      <News/>
      <Footer />
    </div>
  );
}
