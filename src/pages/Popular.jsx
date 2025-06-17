import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import ENDPOINTS from "@/utils/constants/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      // save api key and url populat movie

      // fecth data using axios
      const response = await axios(ENDPOINTS.POPULAR);

      // update state movies using api response
      setMovies(response.data.results);
    }

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies movies={movies} title="Popular Movie" />
    </div>
  );
}

export default Popular;
