import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

/**
 * menangkap props movies di home page
 * melakukan destructing props di parameter
 */
function Main() {
  return (
    <>
      <Hero />
      <Movies title="Latest Movies" />
    </>
  );
}

function Home() {
  return (
    <>
      <Main />
    </>
  );
}

export default Home;
