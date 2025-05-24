import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #10caa7;
  color: #fff;
  padding: 0.3rem;
  text-align: center;

  h2 {
    margin: 1rem;
  }
  p {
    margin-bottom: 1rem;
  }
`;

function Footer() {
  return (  
    <StyledFooter>
      <footer>
        <h2>Movie App</h2>
        <p>Created by IlhamArifinnn</p>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
