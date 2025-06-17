import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import ENDPOINTS from "@/utils/constants/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

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
      <Movies movies={movies} title="Now Playing Movie" />
    </>
  );
}

export default NowPlaying;
