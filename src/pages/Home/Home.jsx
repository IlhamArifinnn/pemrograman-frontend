import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import IndonesiaStats from "../../components/IndonesiaStats/IndonesiaStats";
import ProvinceStats from "../../components/ProvinceStats/ProvinceStats";
import CovidForm from "../../components/CovidForm/CovidForm";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IndonesiaStats />
        <ProvinceStats />
        <CovidForm />
      </main>
      <Footer />
    </>
  );
}

export default Home;
