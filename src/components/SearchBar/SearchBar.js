import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleMaleGender = this.handleMaleGender.bind(this);
    this.handleFemaleGender = this.handleFemaleGender.bind(this);
    this.handleRobotGender = this.handleRobotGender.bind(this);
  }

  handleFilterTextChange(e) {
    const incoming = e.target.value;

    function jsUcfirst(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const maj = jsUcfirst(incoming);

    this.props.onFilterTextChange(maj);
  }

  handleMaleGender(e) {
    this.props.onMaleGenderChange(e.target.checked);
  }

  handleFemaleGender(e) {
    this.props.onFemaleGenderChange(e.target.checked);
  }

  handleRobotGender(e) {
    this.props.onRobotGenderChange(e.target.checked);
  }

  render() {
    const { filterText, maleGender, femaleGender, robotGender } = this.props;
    return (
      <>
        <div className="form">
          <input
            type="text"
            value={filterText}
            className="cssInput"
            id="search"
            name="search"
            placeholder="Rechercher"
            onChange={this.handleFilterTextChange}
          />
          <div>
            <input
              type="checkbox"
              checked={maleGender}
              id="char1"
              onChange={this.handleMaleGender}
            />
            <label htmlFor="char1"> Homme </label>

            <input
              type="checkbox"
              checked={femaleGender}
              id="char2"
              onChange={this.handleFemaleGender}
            />
            <label htmlFor="char2"> Femme </label>

            <input
              type="checkbox"
              checked={robotGender}
              id="char3"
              onChange={this.handleRobotGender}
            />
            <label htmlFor="char3"> Robot </label>
          </div>
        </div>
      </>
    );
  }
}

export default SearchBar;
