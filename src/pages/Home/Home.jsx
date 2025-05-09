import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import IndonesiaStats from "../../components/IndonesiaStats/IndonesiaStats";
import ProvinceStats from "../../components/ProvinceStats/ProvinceStats";
import CovidForm from "../../components/CovidForm/CovidForm";
import Footer from "../../components/Footer/Footer";
import data from "../../utils/constants/provinces";

function Home() {
  const [covid, setCovid] = useState(data);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IndonesiaStats />
        <ProvinceStats data={covid} />
        <CovidForm covid={covid} setCovid={setCovid} />
      </main>
      <Footer />
    </>
  );
}

export default Home;
