const News = () => {
    return (
      <>
        <div className="relative mt-10 pt-10 pb-10">
          {/* Skrå baggrund */}
          <div className="absolute inset-0 bg-[#d9d9d9] clip-diagonal -z-10" />
  
          {/* Indhold */}
          <div className="relative px-6 py-12 md:px-12 max-w-xl mx-auto text-center z-10">
            <h2 className="text-2xl font-bold mb-2">Tilmeld dig vores nyhedsbrev</h2>
            <p className="mb-6 text-gray-700">
              Få de seneste opdateringer og nyheder direkte i din indbakke og hør om alle de nyeste jobs
            </p>
  
            <form className="flex flex-col sm:flex-row cursor-pointer gap-4 justify-center">
              <input
                type="email"
                placeholder="Din email"
                className="px-4 py-2 border border-gray-400 bg-white w-full sm:w-auto flex-1"
              />
              <button
                type="submit"
                className="bg-black cursor-pointer text-white px-6 py-2 hover:bg-white hover:text-black hover:border hover:border-black transition"
              >
                Tilmeld
              </button>
            </form>
          </div>
        </div>
      </>
    );
  };
  
  export default News;
  