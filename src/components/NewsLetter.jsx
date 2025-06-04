import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const News = () => {
  const [isSeekerChecked, setIsSeekerChecked] = useState(false);
  const [isEmployerChecked, setIsEmployerChecked] = useState(false);

  return (
    <>
      <div className="relative mt-10 pt-10 pb-10">
        <div className="absolute inset-0 bg-[#d9d9d9] clip-diagonal -z-10" />

        <div className="relative px-6 py-12 md:px-12 max-w-xl mx-auto text-center z-10">
          <h2 className="text-2xl font-bold mb-2">Tilmeld dig vores nyhedsbrev</h2>
          <p className="mb-6 text-gray-700">
            Få de seneste opdateringer og nyheder direkte i din indbakke og hør om alle de nyeste jobs
          </p>

          <form className="flex flex-col gap-4 items-center">
            <input
              type="email"
              placeholder="Din email"
              className="px-4 py-2 border border-gray-400 bg-white w-full "
            />

            <div className="flex flex-wrap gap-4 items-center">
              {/* Checkbox: For jobsøger */}
              <label
                className="flex items-center gap-2 cursor-pointer select-none"
                onClick={() => setIsSeekerChecked(!isSeekerChecked)}
              >
                <div className="w-5 h-5 border border-black flex items-center justify-center">
                  {isSeekerChecked && (
                    <FaCheck className="w-5 h-5 text-white bg-black " />
                  )}
                </div>
                <span>For jobsøger</span>
              </label>

              {/* Checkbox: For arbejdsgiver */}
              <label
                className="flex items-center gap-2 cursor-pointer select-none"
                onClick={() => setIsEmployerChecked(!isEmployerChecked)}
              >
                <div className="w-5 h-5  border flex items-center justify-center">
                  {isEmployerChecked && (
                    <FaCheck className="w-5 h-5 text-white bg-black " />
                  )}
                </div>
                <span>For arbejdsgiver</span>
              </label>

              {/* Submit button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-2 hover:bg-white hover:text-black hover:border hover:border-black transition cursor-pointer"
              >
                Tilmeld
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default News;
