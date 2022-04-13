import React from "react";

const Character = (props) => {
  let character = props.character;

  return (
    <div className="character">
      <h2>{character.name}</h2>
      <div className="pix">
        <img className="photo" src={character.url} alt={character.name} />
      </div>
      <p>Sexe : {character.gender} </p>
      <p>Taille : {character.height} cm </p>
      <p>Poids : {character.mass} kg </p>
      <p>Couleur de cheveux : {character.hair_color} </p>
      <p>Couleur de peau : {character.skin_color} </p>
      <p>Couleur des yeux : {character.eye_color} </p>
      <p> </p>
    </div>
  );
};

export default Character;
