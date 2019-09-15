import React from 'react'
import DataList from './DataList'
class Status extends React.Component{

  render() {
    return (
      <React.Fragment>
        <div className="Status">{this.props.filteredData.length}</div>
        <DataList 
        filterValue={this.props.filterValue}
        userData={this.props.userData}
        filteredData={this.props.filteredData}
        />
      </React.Fragment>
    );
  }

}

export default Status;