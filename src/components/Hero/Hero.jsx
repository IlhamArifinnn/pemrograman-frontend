import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import styled from "styled-components";
import axios from "axios";
import ENDPOINTS from "@/utils/constants/endpoints";

const StyledHero = styled.div`
  margin: 1rem;

  /* Small Screen */
  .hero {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  .hero__right {
    display: flex;
    justify-content: center;
  }

  .hero__title {
    color: #901e3e;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  .hero__genre {
    color: #521828;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 0.9rem;
  }

  .hero__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #901e3e;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
  .hero__button:hover {
    background-color: #6d132d;
  }

  .hero__image {
    max-width: 90%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
    * Nothing TODO Here.
    * We dont change style Hero. 
    */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

    .hero {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 40%;
    }

    .hero__title {
      margin-bottom: 0;
    }

    .hero__genre {
      margin-bottom: 1rem;
    }

    .hero__description {
      margin-bottom: 2rem;
    }

    .hero__right {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
    }
  }
`;

function Hero() {
  const [movie, setMovie] = useState("");
  const API_KEY = import.meta.env.VITE_API_KEY;
  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const idTrailer = movie && movie.videos.results[0].key;

  useEffect(() => {
    async function fetchTrendingMovie() {
      // const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(ENDPOINTS.TRENDING);
      return response.data.results[0];
    }

    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovie();
      const id = trendingMovie.id;
      // const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
      const response = await axios(ENDPOINTS.DETAIL(id));
      setMovie(response.data);
    }

    fetchDetailMovie();
  }, []);

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.title}</h2>
          <h3 className="hero__genre">Genre: {genres}</h3>
          <p className="hero__description">{movie.overview}</p>
          {/* <button className={hero__button}>Watch Now</button> */}
          <Button
            variant="primary"
            className="hero__button"
            as="a"
            href={`https://www.youtube.com/watch?v=${idTrailer}`}
            target="_blank"
          >
            Watch Movie
          </Button>
        </div>

        <div className="hero__right">
          <img
            className="hero__image"
            src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="Movie"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
