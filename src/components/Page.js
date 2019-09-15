import React from 'react';
// import DataList from './DataList';
import Filters from './Filters';

class Page extends React.Component {
  render() {
    return (
      <main className="App__Main">
        <Filters 
        userData={this.props.userData}
        filterValue={this.props.filterValue}
        GetInputValue={this.props.GetInputValue}
        filteredData={this.props.filteredData}
        />
        {/* <DataList 
        data={this.props.data}
        /> */}
      </main>
    );
  }
}

export default Page;
