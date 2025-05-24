import styled from "styled-components";
import Movie from "../Movie/Movie";
import { nanoid } from "nanoid";

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
    color: #10caa7;
  }

  .movie__container {
    display: flex;
    flex-direction: column;
  }

  .movie__btn {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #10caa7;
    color: #fff;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .movie__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

function Movies({ movies, setMovies }) {
  function handleClick() {
    const movie = {
      id: nanoid(10),
      title: "Jigsaw Spiral",
      year: 2021,
      type: "Movie",
      poster: "https://picsum.photos/300/400",
    };

    // update state movies: setMovies
    // melakukan spread operator untuk copy and merge array
    setMovies([...movies, movie]);
  }

  return (
    <StyledMovies>
      <section className="movies">
        <h2 className="movies__title">Latest Movies</h2>
        <div className="movie__container">
          {/* 
        1. looping movies (array)
        2. render component movie dan kirim props
         */}
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button className="movie__btn" onClick={handleClick}>
          Add Movie
        </button>
      </section>
    </StyledMovies>
  );
}

export default Movies;
