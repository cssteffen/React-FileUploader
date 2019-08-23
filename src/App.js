import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import FilterableList from "./FilterableList/FilterableList";

/*to add state to the App component create a constructor 
and write an instance property named state. 
Set state to be an object with the two values that we need. */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: " ",
      filterOption: "All"
    };
  }

  /*to add interactivity - ADD METHODS to update state 
  Then pass as callback prop to the SearchBar. */
  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    });
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar>
          searchTerm = {this.state.searchTerm}
          filterOption = {this.state.filterOption}
          handleUpdate = {term => this.updateSearchTerm(term)}
          handleFilterChange = {option => this.updateFilterOption(option)}
        </SearchBar>
        <FilterableList
          files={this.props.files}
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
        />
      </div>
    );
  }
}

export default App;
