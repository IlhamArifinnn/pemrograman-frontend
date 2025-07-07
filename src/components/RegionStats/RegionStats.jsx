import axios from "axios";
import { useEffect, useState } from "react";

const SituationByRegion = () => {
  const [covidRegion, setCovidRegion] = useState([]);

  useEffect(() => {
    const getSituationByRegions = async () => {
      const URL = "https://covid-fe-2023.vercel.app/api/global.json";

      try {
        const { data } = await axios(URL);
        setCovidRegion(data.regions);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getSituationByRegions();
  }, []);

  return (
    <section id="global" className="py-20 md:w-[80%] mx-auto">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-2">
        Situation by Regions
      </h1>
      <h2 className="text-center text-blue-600 mb-10">Bacaan Pilihan Covid</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {covidRegion.map((region, index) => (
          <div
            key={index}
            className="bg-white py-8 px-6 w-72 rounded-xl shadow-xl text-center"
          >
            <h1 className="text-slate-700 text-xl font-bold mb-6">
              {region.name}
            </h1>

            <div className="flex justify-between items-center mb-4">
              <div className="text-left">
                <h2 className="text-gray-500 text-sm">Confirmed</h2>
                <h1 className="text-green-500 font-semibold text-lg">
                  {region.numbers.confirmed.toLocaleString("id-ID")}
                </h1>
              </div>
              <img src="/confirmed.png" alt="Confirmed" className="w-[20%]" />
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="text-left">
                <h2 className="text-gray-500 text-sm">Recovered</h2>
                <h1 className="text-blue-500 font-semibold text-lg">
                  {region.numbers.recovered.toLocaleString("id-ID")}
                </h1>
              </div>
              <img src="/recovered.png" alt="Recovered" className="w-[20%]" />
            </div>

            <div className="flex justify-between items-center">
              <div className="text-left">
                <h2 className="text-gray-500 text-sm">Death</h2>
                <h1 className="text-red-500 font-semibold text-lg">
                  {region.numbers.death.toLocaleString("id-ID")}
                </h1>
              </div>
              <img src="/death.png" alt="Death" className="w-[20%]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SituationByRegion;
