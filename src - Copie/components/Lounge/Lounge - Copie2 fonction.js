import React, { useState } from 'react';
import { starwarsData } from '../../data/starwarsData'
import Character from '../Character/Character';

const Lounge = () => {
    const [data, setData] = useState('ok ma gueule');

     console.log(data)

     return (
        <div>
             <h1>STAR WARS</h1>
       {/*          {data.map(character=>{return (<Character key={character.name} character={character}/>)})} */}        
        </div>
    );
};

export default Lounge;


