import Form from "@/components/Form/Form";
import Hero from "@/components/Hero/Hero";
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

function CreateMovie() {
  return (
    <>
      <Hero />
      <Form />
      {/* <StyledSection>
        <div>
          <h2>CreateMovie</h2>
        </div>
        <button className="movie__btn" onClick={handleClick}>
          Add Movie
        </button>
      </StyledSection> */}
    </>
  );
}

export default CreateMovie;
