import { useEffect, useState } from "react";
import Button from "../ui/Button/Button";
import styled from "styled-components";

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
    color: #10caa7;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  .hero__genre {
    color: #347568;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  .hero__description {
    color: #64748b;
    margin-bottom: 1rem;
  }

  .hero__button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #10caa7;
    color: #fff;
    cursor: pointer;
  }
  .hero__button:hover {
    background-color: #0aa38b;
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

    .hero__right {
      flex-basis: 50%;
      display: flex;
      justify-content: center;
    }
  }
`;

function Hero() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    async function getMovies() {
      const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";

      // melakukan fetch data dari API
      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
    }

    getMovies();
  }, []);

  return (
    <StyledHero>
      <section className="hero">
        <div className="hero__left">
          <h2 className="hero__title">{movie.Title}</h2>
          <h3 className="hero__genre">Genre: {movie.Genre}</h3>
          <p className="hero__description">{movie.Plot}</p>
          {/* <button className={hero__button}>Watch Now</button> */}
          <Button variant="primary" className="hero__button">
            Watch Now
          </Button>
        </div>

        <div className="hero__right">
          <img className="hero__image" src={movie.Poster} alt="Movie" />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
