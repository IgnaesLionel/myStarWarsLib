import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props){
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleMaleGender = this.handleMaleGender.bind(this);
        this.handleFemaleGender = this.handleFemaleGender.bind(this);
        this.handleRobotGender = this.handleRobotGender.bind(this);
    }

    handleFilterTextChange(e){
        const incoming = e.target.value

        function jsUcfirst(string) 
        {
        return string.charAt(0).toUpperCase() + string.slice(1);
        }
        const maj= jsUcfirst(incoming)

        this.props.onFilterTextChange(maj)
    }

    handleMaleGender(e){
        this.props.onMaleGenderChange(e.target.checked)
    }

    handleFemaleGender(e){
        this.props.onFemaleGenderChange(e.target.checked)
    }

    handleRobotGender(e){
        this.props.onRobotGenderChange(e.target.checked)
    }


    render() {
        const {filterText, maleGender, femaleGender, robotGender} = this.props
        return (
            <>
                <div className="form-group mb-0">
                    <input type="text" value={filterText} className="form-control" id="search" name="search" placeholder="Rechercher" onChange={this.handleFilterTextChange}/>
                    <div className="form-check">
                        <input type="checkbox" checked={maleGender} className="form-check-input" id="char1" onChange={this.handleMaleGender}/>
                        <label htmlFor="char1" className="form-check-label"> Homme </label>

                        <input type="checkbox" checked={femaleGender} className="form-check-input" id="char2" onChange={this.handleFemaleGender}/>
                        <label htmlFor="char2" className="form-check-label"> Femme </label>

                        <input type="checkbox" checked={robotGender} className="form-check-input" id="char3" onChange={this.handleRobotGender}/>
                        <label htmlFor="char3" className="form-check-label"> Robot </label>
                    </div>
                </div>

            </>
        );
    }
}

export default SearchBar;