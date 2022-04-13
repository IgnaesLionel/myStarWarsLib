import React from 'react';

const Character = (props) => {
    /* console.log(props) -> 1 child*/
    let character = props.character //destructuring
    /* console.log(props.character) <-> console.log(character) */

    return (  
        <div className="character">
            <h2>{character.name}</h2>
            <div className="pix">
            <img className="photo" src={character.url} alt={character.name}/>
            </div>
            <span>Sexe : {character.gender} </span>
            <span>Taille : {character.height} cm </span>
            <span>Poids : {character.mass} kg </span>
            <span>Couleur de cheveux : {character.hair_color} </span>
            <span>Couleur de peau : {character.skin_color} </span>
            <span>Couleur des yeux : {character.eye_color} </span>
            <span> </span>
       </div>
    );
};

export default Character;