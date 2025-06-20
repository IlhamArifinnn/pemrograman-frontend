import DetailMovie from "@/components/DetailMovie/DetailMovie";
import Movies from "@/components/Movies/Movies";
import ENDPOINTS from "@/utils/constants/endpoints";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function Detail() {
  const { id } = useParams();
  // create movies state
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getRecommedationMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      // const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`;
      const response = await axios(ENDPOINTS.RECOMMENDATIONS(id));

      // update state
      setMovies(response.data.results);
    }

    getRecommedationMovies();
  }, [id]);

  return (
    <>
      <DetailMovie />
      <Movies
        movies={movies}
        title="Recommendation Movies.
"
      />
    </>
  );
}

export default Detail;
