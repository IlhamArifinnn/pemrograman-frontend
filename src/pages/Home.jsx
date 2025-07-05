import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import IndonesiaStats from "../components/IndonesiaStats/IndonesiaStats";
import ProvinceStats from "../components/ProvinceStats/ProvinceStats";
import CovidForm from "../components/CovidForm/CovidForm";
import Footer from "../components/Footer/Footer";
import data from "../utils/constants/provinces";
import Container from "../components/Container/Container";

function Home() {
  const [covid, setCovid] = useState(data);

  return (
    <>
      <Container>
        <Navbar />
        <main className="container">
          <Hero />
          <IndonesiaStats />
          <ProvinceStats data={covid} />
          <CovidForm covid={covid} setCovid={setCovid} />
        </main>
        <Footer />
      </Container>
    </>
  );
}

export default Home;
