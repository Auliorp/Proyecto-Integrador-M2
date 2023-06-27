import React from "react";

let Card = (props) => {
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <h2>{props.id}</h2>
      <h2>{props.name}</h2>
      <h2>{props.status}</h2>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <h2>{props.origin.name}</h2>
      <img src={props.image} alt={`Foto de ${props.name}.`} />
    </div>
  );
};

export default Card;
