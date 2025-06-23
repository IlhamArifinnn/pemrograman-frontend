import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import MoviesContext from "@/context/MoviesContext";
import ENDPOINTS from "@/utils/constants/endpoints";
import axios from "axios";
import { useContext, useEffect } from "react";

function TopRated() {
  const { setMovies } = useContext(MoviesContext);

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
      <Movies title="Top Rated Movie" />
    </>
  );
}

export default TopRated;
