import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// ambil element id root
// const app = document.getElementById("root");

// buat root untuk menampilkan react component
// const root = createRoot(app);

// render ui yang ingin ditampilkan
// root.render(<Main />);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
