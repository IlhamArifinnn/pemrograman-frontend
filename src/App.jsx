import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import CreateMovie from "./pages/CreateMovie";
import Popular from "./pages/Popular";
import NowPlaying from "./pages/NowPlaying";
import TopRated from "./pages/TopRated";
import Layout from "./components/Layout/Layout";
import CounterButton from "./components/CounterButton/CounterButton";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import Detail from "./pages/Detail";
import { useState } from "react";
import data from "./utils/constants/data";
import MoviesContext from "./context/MoviesContext";

const App = () => {
  /**
   * Lifting up state movies ke app component
   * agar bisa digunakan di home dan create
   */
  const [movies, setMovies] = useState(data);

  // context value that will be shared
  const contextValue = {
    movies,
    setMovies,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MoviesContext.Provider value={contextValue}>
        <Layout>
          <Routes>
            {/* kirim state movie ke home dan create page */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/movie/create" element={<CreateMovie />}></Route>
            <Route path="/movie/popular" element={<Popular />}></Route>
            <Route path="/movie/now" element={<NowPlaying />}></Route>
            <Route path="/movie/top" element={<TopRated />}></Route>
            <Route path="/movie/:id" element={<Detail />}></Route>
            <Route path="/button" element={<CounterButton />}></Route>
          </Routes>
        </Layout>
      </MoviesContext.Provider>
    </ThemeProvider>
  );
};

export default App;
