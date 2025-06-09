import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const News = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSeekerChecked, setIsSeekerChecked] = useState(false);
  const [isEmployerChecked, setIsEmployerChecked] = useState(false);

  // Formvalidering – aktivér knappen kun hvis alt er udfyldt korrekt
  const isFormValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    (isSeekerChecked || isEmployerChecked);

  return (
    <>
      <div className="relative mt-10 pt-10 pb-10">
        <div className="absolute inset-0 bg-[#d9d9d9] clip-diagonal -z-10" />

        <div className="relative px-6 py-12 md:px-12 max-w-xl mx-auto text-center z-10">
          <h2 className="text-2xl font-bold mb-2">Tilmeld dig vores nyhedsbrev</h2>
          <p className="mb-6 text-gray-700">
            Få udvalgte artikler, podcasts, jobopslag og opdateringer – direkte i din indbakke.
            Vælg din rolle, så vi kan sende dig det, der er mest relevant for dig.
          </p>

          <form className="flex flex-col gap-4 items-center">
            {/* Navn */}
            <input
              type="text"
              placeholder="Fornavn"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-2 border border-gray-400 bg-white w-full"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 border border-gray-400 bg-white w-full"
            />

            {/* Checkbox-sektion */}
            <div className="flex gap-4 items-center">
              <span>Privatperson</span>
              <label
                className="flex items-center gap-2 cursor-pointer select-none"
                onClick={() => setIsSeekerChecked(!isSeekerChecked)}
              >
                <div className="w-5 h-5 border border-black flex items-center justify-center">
                  {isSeekerChecked && (
                    <FaCheck className="w-4 h-4 text-white bg-black" />
                  )}
                </div>
              </label>

              <span>Virksomhed</span>
              <label
                className="flex items-center gap-2 cursor-pointer select-none"
                onClick={() => setIsEmployerChecked(!isEmployerChecked)}
              >
                <div className="w-5 h-5 border border-black flex items-center justify-center">
                  {isEmployerChecked && (
                    <FaCheck className="w-4 h-4 text-white bg-black" />
                  )}
                </div>
              </label>
           

            {/* Tilmeld knap */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`px-6 py-2 transition ${
                isFormValid
                  ? "bg-black text-white hover:bg-white hover:text-black hover:border hover:border-black cursor-pointer"
                  : "bg-black text-white cursor-not-allowed"
              }`}
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

