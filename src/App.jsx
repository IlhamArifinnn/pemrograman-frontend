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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<CreateMovie />}></Route>
          <Route path="/movie/popular" element={<Popular />}></Route>
          <Route path="/movie/now" element={<NowPlaying />}></Route>
          <Route path="/movie/top" element={<TopRated />}></Route>
          <Route path="/button" element={<CounterButton />}></Route>
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
