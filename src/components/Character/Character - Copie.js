import React, { Component } from 'react';

class Character extends Component {
    render() {
        /* console.log(this.props) -> 1 child*/
        let character = this.props.character //destructuring
        /* console.log(this.props.character) <-> console.log(character) */
        
        return (
            <div>
                <h2>{character.name}</h2>
                <span>Sexe : {character.gender} </span>
                <span>Taille : {character.height} cm </span>
                <span>Poids : {character.mass} </span>
                <span>Couleur de cheveux : {character.hair_color} </span>
                <span>Couleur de peau : {character.skin_color} </span>
                <span>Couleur des yeux : {character.skin_color} </span>
                <span> </span>
            </div>
        );
    }
}

export default Character;