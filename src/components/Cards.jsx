import React from "react";
import Card from "./Card";

let Cards = (props) => {
  return (
    <div>
      {props.characters.map((perfil) => {
        return (
          <Card
            name={perfil.name}
            status={perfil.status}
            species={perfil.species}
            gender={perfil.gender}
            origin={perfil.origin.name}
            image={perfil.image}
            id={perfil.id}
            onClose={() =>
              window.alert(`Emulamos el cierre de la persona ${perfil.name}`)
            }
          />
        );
      })}
    </div>
  );
};

export default Cards;
