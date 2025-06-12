import { nanoid } from "nanoid";
import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem;

  .movie__btn {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #901e3e;
    color: #fff;
    margin-bottom: 0.5rem;
    cursor: pointer;
  }
`;

function CreateMovie({ movies, setMovies }) {
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
    <>
      <StyledSection>
        <div>
          <h2>CreateMovie</h2>
        </div>
        <button className="movie__btn" onClick={handleClick}>
          Add Movie
        </button>
      </StyledSection>
    </>
  );
}

export default CreateMovie;
