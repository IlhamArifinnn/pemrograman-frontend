import { Link } from "react-router";
import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #901e3e;
  padding: 1rem;
  color: #fff;

  /* Small Screen */
  .navbar {
    display: flex;
    flex-direction: column;
  }

  .navbar__container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .navbar__brand {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }

  .navbar__list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .navbar__item {
    margin-bottom: 1rem;
  }

  .navbar__item a {
    text-decoration: none;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    transition: color 0.3s ease;
  }

  .navbar__item a:hover {
    color: black;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    .navbar__brand {
      margin-bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }

    .navbar__list {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .navbar__item {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /* 
   * Nothing TODO HERE.
   * We haven't styling Navbar.
   */
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <nav className="navbar">
        <div className="navbar__container">
          <h1 className="navbar__brand">Movie App</h1>
        </div>

        <div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/create">Add Movie</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/popular">Popular</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/now">Now Playing</Link>
            </li>
            <li className="navbar__item">
              <Link to="/movie/top">Top Rated</Link>
            </li>
            <li className="navbar__item">
              <Link to="/button">Button</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
