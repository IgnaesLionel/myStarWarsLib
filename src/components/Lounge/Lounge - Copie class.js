import React, { Component } from 'react';
import { starwarsData } from '../../data/starwarsData'
import Character from '../Character/Character';

class Lounge extends Component {
    
    state = {
        data:starwarsData 
    }
    
    render() {
        /* console.log(starwarsData) <-> console.log(this.state.data) <-> console.log(data)*/
      
        let {data} = this.state  //destructuring
        
        return (
            <div>
                <h1>STAR WARS</h1>
                {data.map(character=>{return (<Character key={character.name} character={character}/>)})}        
            </div>
        );
    }
}

export default Lounge;