import React from "react";
import Character from "../Character/Character";

const Characters = (props) => {
  const rows = [];

  props.data.forEach((character) => {
    if (props.maleGender && character.gender !== "homme") {
      return;
    } // si la selection male est true mais que le character n'est pas un homme, ne return rien
    if (props.femaleGender && character.gender !== "femme") {
      return;
    } // si la selection femele est true mais que le character n'est pas un homme, ne return rien
    if (props.robotGender && character.gender !== "robot") {
      return;
    } // si la selection robot est true mais que le character n'est pas un homme, ne return rien
    if (character.name.indexOf(props.filterText) === -1) {
      // si ce qui est tapé n'est pas le debut de l'article, return et pas de push
      return;
    }

    rows.push(character); //envoies tous les articles
  });

  return (
    <div className="characters">
      {rows.map((character, k) => {
        return <Character key={k} character={character} />;
      })}
    </div>
  );
};

export default Characters;
