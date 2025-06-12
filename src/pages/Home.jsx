import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import data from "../utils/constants/data";

function Main() {
  // membuat variable movies global
  const [movies, setMovies] = useState(data);

  return (
    <>
      <Hero />
      <Movies movies={movies} setMovies={setMovies} />
      <Form movies={movies} setMovies={setMovies} />
    </>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
