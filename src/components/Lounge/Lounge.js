import React, { Component } from "react";
import { starwarsData } from "../../data/starwarsData";
import Characters from "../Characters/Characters";
import SearchBar from "../SearchBar/SearchBar";

class Lounge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: { starwarsData },
      filterText: "",
      maleGender: false,
      femaleGender: false,
      robotGender: false,
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleMaleGenderFilter = this.handleMaleGenderFilter.bind(this);
    this.handleFemaleGenderFilter = this.handleFemaleGenderFilter.bind(this);
    this.handleRobotGenderFilter = this.handleRobotGenderFilter.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText });
  }

  handleMaleGenderFilter(maleGender) {
    this.setState({ maleGender });
  }

  handleFemaleGenderFilter(femaleGender) {
    this.setState({ femaleGender });
  }

  handleRobotGenderFilter(robotGender) {
    this.setState({ robotGender });
  }

  render() {
    const data = this.state.data.starwarsData;
    return (
      <div>
        <h1 className="centeredText"> Générateur de carte</h1>

        <div className="centeredBloc">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Star_Wars_Logo..png/640px-Star_Wars_Logo..png"
            height="150px"
            alt="starwars logo"
          />
        </div>

        <SearchBar
          onMaleGenderChange={this.handleMaleGenderFilter}
          onFemaleGenderChange={this.handleFemaleGenderFilter}
          onRobotGenderChange={this.handleRobotGenderFilter}
          onFilterTextChange={this.handleFilterTextChange}
          filterText={this.state.filterText}
          maleGender={this.state.maleGender}
          femaleGender={this.state.femaleGender}
          robotGender={this.state.robotGender}
        />

        <div className="lounge">
          <Characters
            data={data}
            filterText={this.state.filterText}
            maleGender={this.state.maleGender}
            femaleGender={this.state.femaleGender}
            robotGender={this.state.robotGender}
          />
        </div>
      </div>
    );
  }
}

export default Lounge;
