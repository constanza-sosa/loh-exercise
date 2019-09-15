import React from 'react';
import Status from './Status'


class Filters extends React.Component {
  render() {
    return (
      <React.Fragment>
        <label className="Input__Label" htmlFor="Input"></label>
        <input 
        className="Input"
        id="Input"
        type="text"
        onChange={this.props.GetInputValue}
        />
      
        <Status 
        filterValue={this.props.filterValue}
        userData={this.props.userData}
        filteredData={this.props.filteredData}
        />
      </React.Fragment>
    );
  }
}

export default Filters;
