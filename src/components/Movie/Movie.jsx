import styled from "styled-components";

const StyledMovie = styled.div`
  margin-bottom: 1rem;
  margin: 1rem auto;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
  }
  h3 {
    color: #10caa7;
    font-size: 1.8rem;
    margin-bottom: 0.3rem;
  }
  p {
    color: #64748b;
  }

  /* Responsive styling */
  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 20%;
    padding: 1rem;
  }
`;

function Movie(props) {
  // melakukan destructing props
  const { movie } = props;

  return (
    <StyledMovie>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
    </StyledMovie>
  );
}

export default Movie;
