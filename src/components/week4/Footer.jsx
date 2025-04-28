import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#555",
        color: "white",
        textAlign: "center",
        padding: "3px",
      }}
    >
      <p>
        Copyright <a href="#!">@IlhamArifin</a>
      </p>
      <p>
        Created by{" "}
        <a href="https://react.dev/" target="_blank">
          React
        </a>
      </p>
    </footer>
  );
};

export default Footer;
