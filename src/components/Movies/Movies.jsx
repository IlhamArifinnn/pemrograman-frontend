import styled from "styled-components";
import Movie from "../Movie/Movie";
import { useContext } from "react";
import MoviesContext from "@/context/MoviesContext";

const StyledMovies = styled.div`
  margin: 1rem;
  width: 100%;

  /* Small Screen */
  .movies {
    margin: 5rem 0;
    text-align: center;
    background-color: #efefef;
    border-radius: 0.8rem;
    padding: 0.5rem;
  }

  .movies__title {
    margin: 1rem;
    font-size: 2.44rem;
    color: #901e3e;
  }

  .movie__container {
    display: flex;
    flex-direction: column;
    align-items: stretch; /* Ini penting untuk membuat semua card sama tinggi */
    gap: 1rem; /* Jarak antar item */
  }

  .movie__btn {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #901e3e;
    color: #fff;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .movie__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: stretch; /* Membuat semua item memiliki tinggi yang sama */
      gap: 0; /* Reset gap karena margin sudah diatur di Movie component */
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

function Movies({ title = "Latest Movie" }) {
  // use movies context and get context value
  const { movies } = useContext(MoviesContext);

  return (
    <StyledMovies>
      <section className="movies">
        <h2 className="movies__title">{title}</h2>
        <div className="movie__container">
          {/* 
        1. looping movies (array)
        2. render component movie dan kirim props
         */}
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        {/* <button className="movie__btn" onClick={handleClick}>
          Add Movie
        </button> */}
      </section>
    </StyledMovies>
  );
}

export default Movies;
