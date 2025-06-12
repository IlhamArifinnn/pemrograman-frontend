import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import axios from "axios";
import { useEffect, useState } from "react";

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchPopularMovies() {
      // save api key and url populat movie
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

      // fecth data using axios
      const response = await axios(url);

      // update state movies using api response
      setMovies(response.data.results)
    }

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <Hero />
      <Movies movies={movies} movie__title="Popular Movie" />
    </div>
  );
}

export default Popular;
