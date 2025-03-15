import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CardProfile from "./CardProfile";

function Main() {
  return (
    <div style={{ width: "50%", margin: "auto" }}>
      <Header />
      <CardProfile nama="Ilham Arifin" jurusan="Teknik Informatika" />
      <CardProfile nama="Jhon Doe" jurusan="Sistem Informasi" />
      <CardProfile nama="Jhon Smith" jurusan="Bisnis Digital" />
      <Footer />
    </div>
  );
}

export default Main;
