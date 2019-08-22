import React from "react";
import ListItem from "../ListItem/ListItem";
import "./FilterableList.css";

/* This one is responsible for taking the array of files 
as a prop named files and displaying a ListItem 
for each file in the array. 
For this, the map method is used to iterate the array 
and output a ListItem component for each file 
=====
to filter the array of files displayed we simply access the values 
from the props, iterate over the files array keeping those that 
match the criteria: the file name contains the searchTerm and the 
file status is equal to the filterOption or the filterOption is 'All'.
*/

//HOW DO WE CHOOSE WHEN TO USE A CLASS
// AND WHEN TO USE A FUNCTION???
class FilterableList extends React.Component {
  render() {
    const { searchTerm, filterOption } = this.props;
    const list = this.props.files
      .filter(
        file =>
          file.name.includes(searchTerm) &&
          (filterOption === "All" || file.status === filterOption)
      )
      .map((file, key) => <ListItem {...file} key={key} />);
    //Why not use ul? instead of div for more semantic html?
    return <div className="FilterableList">{list}</div>;
  }
}

FilterableList.defaultProps = {
  files: []
};

export default FilterableList;
