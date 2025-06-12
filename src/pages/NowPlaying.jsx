import Hero from "@/components/Hero/Hero";
import Movies from "@/components/Movies/Movies";
import axios from "axios";
import { useEffect, useState } from "react";

function NowPlaying() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchNowPlayingMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;

      // fecth data using axios
      const response = await axios(url);

      // update state movies using api response
      setMovies(response.data.results);
    }
    fetchNowPlayingMovie();
  }, []);

  return (
    <>
      <Hero />
      <Movies movies={movies} movie__title="Now Playing Movie" />
    </>
  );
}

export default NowPlaying;
