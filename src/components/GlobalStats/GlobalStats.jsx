import axios from "axios";
import { useEffect, useState } from "react";

const GlobalStats = () => {
  const [covidGlobal, setCovidGlobal] = useState([]);

  useEffect(() => {
    const getGlobalSituation = async () => {
      const URL = "https://covid-fe-2023.vercel.app/api/global.json";

      try {
        const { data } = await axios(URL);
        setCovidGlobal(data.global);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    getGlobalSituation();
  }, []);

  const statusColor = {
    confirmed: "text-red-500",
    recovered: "text-green-500",
    death: "text-gray-500",
  };

  return (
    <section id="global" className="py-20 bg-blue-50">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-2">
        Global Situation
      </h1>
      <h2 className="mb-8 text-center text-blue-600">
        Data Covid Berdasarkan Global
      </h2>

      <div className="flex flex-col flex-wrap md:flex-row md:justify-center gap-4 ">
        {covidGlobal.map((item) => (
          <div
            key={item.status}
            className="bg-white mx-4 py-10 px-16 rounded-xl text-center shadow-xl"
          >
            <h2 className="text-2xl font-medium mb-2 text-slate-700">
              {item.status}
            </h2>
            <h1
              className={`text-2xl font-semibold ${statusColor[item.status]}`}
            >
              {item.total.toLocaleString("id-ID")}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GlobalStats;
