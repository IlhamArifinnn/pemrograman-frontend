import styled from "styled-components";

const StyledMovie = styled.div`
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  height: 100%;

  .image-container {
    flex-shrink: 0;
    margin-bottom: 1rem;
  }

  img {
    border-radius: 25px;
    width: 100%;
    height: 250px;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.05);
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  h3 {
    color: #901e3e;
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
    line-height: 1.3;
    min-height: 3.6rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  p {
    color: #64748b;
    margin-top: auto;
  }

  /* Responsive styling */
  @media (min-width: 768px) {
    flex-basis: calc(50% - 2rem);
    margin: 1rem;
  }

  @media (min-width: 992px) {
    flex-basis: calc(20% - 2rem);
    margin: 1rem;

    img {
      height: 350px;
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 767px) {
    img {
      height: 300px;
    }

    h3 {
      font-size: 1.2rem;
      min-height: 3rem;
    }
  }
`;

function Movie({ movie }) {
  const tmdbImage = `https://image.tmdb.org/t/p/w300/${movie.poster_path}`;
  const year = movie.year || movie.release_date;
  const formattedDate = year
    ? new Intl.DateTimeFormat("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(new Date(year))
    : "Unknown";

  return (
    <StyledMovie>
      <div className="content">
        <img src={movie.poster || tmdbImage} alt={movie.title} />
      </div>
      <h3>{movie.title}</h3>
      <p>{formattedDate}</p>
    </StyledMovie>
  );
}

export default Movie;
