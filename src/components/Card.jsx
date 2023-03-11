import React from "react";

const Card = ({ userName, artista, disco, selectValue }) => {
  return (
    <div>
      <h3>Yo soy: {userName} </h3>
      <h3>Mi artista favorita es: {artista} </h3>
      <h3>El disco que más me gusta es: {disco} </h3>
      <h3>Amo la canción: {selectValue} </h3>
    </div>
  );
};

export default Card;