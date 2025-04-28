import React from "react";

const CardProfile = (prop) => {
  const { nama, jurusan } = prop;
  return (
    <div>
      <h3>{nama}</h3>
      <b>Jurusan:</b> <span>{jurusan}</span>
      <hr />
    </div>
  );
};

export default CardProfile;
