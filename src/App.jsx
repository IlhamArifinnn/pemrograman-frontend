import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Indonesia from "./pages/Indonesia";
import Provinsi from "./pages/Provinsi";
import About from "./pages/About";
import Layout from "./components/Layout/Layout";
import CovidContext from "./context/CovidContext";
import { useState } from "react";
import data from "./utils/constants/provinces";

function App() {
  const [covid, setCovid] = useState(data);

  const ContextValue = {
    covid,
    setCovid,
  };

  return (
    <>
      <CovidContext.Provider value={ContextValue}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/indonesia" element={<Indonesia />} />
            <Route path="/provinsi" element={<Provinsi />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </CovidContext.Provider>
    </>
  );
}

export default App;
