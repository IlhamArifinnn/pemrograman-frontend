import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import MoviesContext from "@/context/MoviesContext";
import ENDPOINTS from "@/utils/constants/endpoints";
import axios from "axios";
import { useContext, useEffect } from "react";

function Popular() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchPopularMovies() {
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
      <Movies title="Popular Movie" />
    </div>
  );
}

export default Popular;
