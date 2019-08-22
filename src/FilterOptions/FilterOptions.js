import React from "react";
import "./FilterOptions.css";

/* we have a number of radio buttons and the 
one to be selected is determined by the value 
filterOption in the state, passed to this component 
as a prop. To specify whether a radio button is checked 
or not use the checked attribute of the radio button. */

/* for interactivity: add the event handler to the radio buttons.
When the radio button is clicked the callback is invoked with 
the value of the clicked button. The state in App is updated 
and the re-render is triggered */

//Why did they choose to use divs and labels instead of a form & labels?

class FilterOptions extends React.Component {
  render() {
    const { filterOption } = this.props;
    return (
      <div className="FilterOptions">
        <div className="FilterOptions__option">
          <label htmlFor="filter_all">
            <input
              type="radio"
              value="All"
              id="filter_all"
              name="filter"
              checked={filterOption === "All"}
              onChange={e => this.props.handleFilterChange(e.target.value)}
            />
            All
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_uploaded">
            <input
              type="radio"
              value="Uploaded"
              id="filter_uploaded"
              name="filter"
              checked={filterOption === "Uploaded"}
              onChange={e => this.props.handleFilterChange(e.target.value)}
            />
            Uploaded
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_synced">
            <input
              type="radio"
              value="Synced"
              id="filter_synced"
              name="filter"
              checked={filterOption === "Synced"}
              onChange={e => this.props.handleFilterChange(e.target.value)}
            />
            Synced
          </label>
        </div>
        <div className="FilterOptions__option">
          <label htmlFor="filter_new">
            <input
              type="radio"
              value="New"
              id="filter_new"
              name="filter"
              checked={filterOption === "New"}
              onChange={e => this.props.handleFilterChange(e.target.value)}
            />
            New
          </label>
        </div>
      </div>
    );
  }
}

export default FilterOptions;
