'use client'
import { useEffect, useState } from "react";
import supabase from '../lib/supabase';
import Design from "../components/Design";


const JobCards = ({minId, maxId, designColor, tags, jobtype}) => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          let query = supabase
            .from('jobportal')
            .select('id, firma, dato, image, stilling, by, jobtype, tags')
            .gte('id', minId)
            .lte('id', maxId);
      
          // Hvis et specifikt tag er valgt (andet end "Alle jobs"), filtrér
          if (tags && tags !== 'Alle jobs') {
            query = query.eq('tags', tags);
          }
      
          const { data, error } = await query;
      
          if (error) {
            console.error('Fejl ved hentning:', error);
          } else {
            setJobs(data);
          }
        };
      
        fetchData();
      }, [minId, maxId, tags]);
    return (  <>
    <h2 className="pt-10">Nyeste {jobtype} jobs</h2>
    <div className=' flex flex-col sm:grid sm:grid-cols-2 mt-20  max-w-[1000px] m-auto'>
    <Design color={designColor} height="350px"/>
      {jobs.map((job) => (
        <div key={job.id} className=" grid grid-cols-2   mb-10 items-center">
          {job.image && (
            <div className="aspect-square bg-white max-w-[200px] ">
            <img
              className="w-full border-[#E6E5E5] border h-full m-auto object-contain"
              src={job.image}
              alt={job.firma}
            />
          </div>
          )}
         
          <div>
                <p>{job.firma}</p>
                <h3 className=" text-gray-700 text-sm m-auto  cursor-pointer hover:underline line-clamp-3 ">
                  {job.stilling}
                </h3>
              <p className="m-auto pt-2 ">
                {job.jobtype}
              </p>
              
                <p className="pt-2 text-gray-700 text-sm m-auto  line-clamp-3">
                  {job.by}
                </p>
                <p className="pt-2 text-gray-700 text-sm m-auto  line-clamp-3">
                  {job.dato}
                </p>
              
          </div>
        </div>
      ))}
    </div>
    </>);
}
 
export default JobCards;