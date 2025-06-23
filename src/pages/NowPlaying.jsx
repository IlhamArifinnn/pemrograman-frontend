import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import MoviesContext from "@/context/MoviesContext";
import ENDPOINTS from "@/utils/constants/endpoints";
import axios from "axios";
import { useContext, useEffect } from "react";

function NowPlaying() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlayingMovie() {
      // fecth data using axios
      const response = await axios(ENDPOINTS.NOW_PLAYING);

      // update state movies using api response
      setMovies(response.data.results);
    }
    fetchNowPlayingMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Now Playing Movie" />
    </>
  );
}

export default NowPlaying;
