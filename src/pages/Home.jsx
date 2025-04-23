import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";
import Form from "../components/Form/Form";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Movies />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default Home;
