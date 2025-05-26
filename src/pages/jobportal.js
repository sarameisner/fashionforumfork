// vores jobportalside med filtrerbare jobopslag og undermenu
"use client";
import Footer from "@/components/Footer";
import { useState } from "react";
import JobCards from "@/components/JobCard";
import UndermenuJob from "@/components/UndermenuJob";
import Head from "next/head";

export default function Jobportal() {
  // state til at holde øje med hvilken kategori der er valgt i undermenuen
  const [selectedTag, setSelectedTag] = useState("Alle jobs");
  return (
    <>
      <Head>
        <title>Jobportal</title>
        <meta name="description" content="Find aktuelle jobopslag i mode-, beauty- og livsstilsbranchen. Din karriere starter her." />
      </Head>
      <div className="lg:ml-[300px]">
        {/* Undermenu med tags/filtre til jobopslag – sender det valgte tag videre via props */}
        <UndermenuJob activeTag={selectedTag} onChangeTag={setSelectedTag} />
        <JobCards minId={0} maxId={999} designColor="#5eaec9" tags={selectedTag} />
        <Footer />
      </div>
    </>
  );
}
