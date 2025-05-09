'use client'
import Footer from "@/components/Footer";
import { useState
 } from "react";
 import JobCards from "@/components/JobCard";
import UndermenuJob from "@/components/UndermenuJob";
import Head from "next/head";


export default function Jobportal() {
    const [selectedTag, setSelectedTag] = useState('Alle jobs');
  return (
    <><Head>
    <title>Jobportal</title>
    <meta name="description" content="Find aktuelle jobopslag i mode-, beauty- og livsstilsbranchen. Din karriere starter her." />
  </Head>
    <div className="lg:ml-[300px]">
       
        

<UndermenuJob activeTag={selectedTag} onChangeTag={setSelectedTag} />
<JobCards minId={0} maxId={999} designColor="#5eaec9" tags={selectedTag} />
      <Footer/>
    </div>
    </>
  );
}
