import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../ui/Button/Button";
import { useParams } from "react-router";

const StyledDetailMovie = styled.div`
  // Mobile Screen
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  text-align: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2.44rem;
    margin-bottom: 0.5rem;
    color: #901e3e;
  }

  h3 {
    font-size: 1.59rem;
    margin-bottom: 0.5rem;
    color: #521828;
  }

  p {
    text-align: justify;
    margin-bottom: 2rem;
    color: #64748b;
  }
  a {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #901e3e;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
  }
  a:hover {
    background-color: #6d132d;
  }

  // Medium Screen: 768px
  @media screen and (min-width: 768px) {
    flex-direction: row;
    text-align: left;

    .poster {
      flex-basis: 30%;
    }

    .info {
      flex-basis: 60%;
    }
  }

  // Large Screen
  @media screen and (min-width: 992px) {
  }
`;

function DetailMovie() {
  const { id } = useParams();
  // create movie state
  const [movie, setMovie] = useState(null);

  const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
  const trailer = movie && `youtube.com/watch?v=${movie.videos.results[0].key}`;

  useEffect(() => {
    async function getDetailMovie() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const url = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(url);

      // update state movie with response
      setMovie(response.data);
    }
    getDetailMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
      <StyledDetailMovie>
        <div className="poster">
          <img
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
        <div className="info">
          <h2>{movie.title}</h2>
          <h3>Genre: {genres}</h3>
          <p>{movie.overview}</p>
          <Button
            variant="primary"
            className="hero__button"
            as="a"
            href={trailer}
            target="_blank"
          >
            Watch Movie
          </Button>
        </div>
      </StyledDetailMovie>
    </>
  );
}

export default DetailMovie;
