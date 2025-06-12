import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import axios from "axios";
import { useEffect, useState } from "react";

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;

      // fecth data using axios
      const response = await axios(url);

      // update state movies using api response
      setMovies(response.data.results);
    }
    fetchTopRatedMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} movie__title="Top Rated Movie" />
    </>
  );
}

export default TopRated;
