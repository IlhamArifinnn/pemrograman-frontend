import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import data from "../../utils/constants/data";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function Movies() {
  // membuat variable movies
  const [movies, setMovies] = useState(data);

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
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/* 
        1. looping movies (array)
        2. render component movie dan kirim props
         */}
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button className={styles.movie__btn} onClick={handleClick}>
          Add Movie
        </button>
      </section>
    </div>
  );
}

export default Movies;
