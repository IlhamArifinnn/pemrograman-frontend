import { useEffect, useState } from "react";
import Hero from "../components/Hero/Hero";
import IndonesiaStats from "../components/IndonesiaStats/IndonesiaStats";
import ProvinceStats from "../components/ProvinceStats/ProvinceStats";
import axios from "axios";

function Indonesia() {
  const [covidProvinsi, setCovidProvinsi] = useState([]);

  useEffect(() => {
    async function getIndonesiaSituation() {
      const URL = "https://covid-fe-2023.vercel.app/api/indonesia.json";

      try {
        const { data } = await axios(URL);
        setCovidProvinsi(data.regions);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    getIndonesiaSituation();
  }, []);

  return (
    <>
      <Hero />
      <IndonesiaStats />
      <ProvinceStats covidProvinsi={covidProvinsi} title="Situation By Provinces" />
    </>
  );
}

export default Indonesia;
