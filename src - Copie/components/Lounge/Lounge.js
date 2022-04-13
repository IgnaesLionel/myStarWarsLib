import React, { Component } from 'react';
import { starwarsData } from '../../data/starwarsData'
import Characters from '../Characters/Characters'; 
import SearchBar from '../SearchBar/SearchBar'; 

class Lounge extends Component {

    constructor (props) {
        super(props)
        this.state = {
            data : {starwarsData},
            filterText: '',
            maleGender: false,
            femaleGender: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMaleGenderFilter = this.handleMaleGenderFilter.bind(this);
        this.handleFemaleGenderFilter = this.handleFemaleGenderFilter.bind(this);
    }

    handleFilterTextChange (filterText) {
        this.setState({filterText})
    }

    handleMaleGenderFilter (maleGender) {
        this.setState({maleGender})
    }

    handleFemaleGenderFilter (femaleGender) {
        this.setState({femaleGender})
    }

    render() {
        const data = this.state.data.starwarsData
        return (
            <div>
                <h1>STAR WARS</h1>     
                {JSON.stringify(this.state.filterText)}
                <SearchBar 
                onMaleGenderChange={this.handleMaleGenderFilter} 
                onFemaleGenderChange={this.handleFemaleGenderFilter}
                onFilterTextChange={this.handleFilterTextChange} 
                filterText={this.state.filterText} 
                maleGender={this.state.maleGender}
                femaleGender={this.state.femaleGender}/>
                
                 <div className="lounge">
                   <Characters data={data} filterText={this.state.filterText} maleGender={this.state.maleGender}/>
                </div>
                
            </div>
        );
    }
}

export default Lounge;


//onMaleGenderChange
//onFilterTextChange

//filterText
//inMaleGender

