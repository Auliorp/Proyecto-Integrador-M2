import React from "react";

let SearchBar = (props) => {
  return (
    <div>
      <input type="search" placeholder="Busca un personaje" />
      <button onClick={props.onSearch}>Agregar</button>
    </div>
  );
};

export default SearchBar;
