import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import ENDPOINTS from "@/utils/constants/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";

function TopRated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTopRatedMovie() {
      // fecth data using axios
      const response = await axios(ENDPOINTS.TOP_RATED);

      // update state movies using api response
      setMovies(response.data.results);
    }
    fetchTopRatedMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} title="Top Rated Movie" />
    </>
  );
}

export default TopRated;
