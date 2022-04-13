import React from 'react';
import Character from '../Character/Character';

const Characters = (props) => {

    /* {data, inStockOnly, filterText, props} */
    const rows = [];

    props.data.forEach(character => {
        if (props.maleGender && character.gender !== "homme"){
            return}  // si le instockOnly est true et que le produit n'est pas en stock, return et pas de push
        if (character.name.indexOf(props.filterText) === -1){ // si ce qui est tapé n'est pas le debut de l'article, return et pas de push
            return
        }
       
        rows.push(character)  //envoies tous les articles
    } )

 
    return (
        <div>  
                {rows.map((character,k) => {return (<Character key={k} character={character}/>)})}          
        </div>
    );
};

export default Characters;