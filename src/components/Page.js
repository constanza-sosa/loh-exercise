import React from 'react';
// import DataList from './DataList';
import Filters from './Filters';

class Page extends React.Component {
  render() {
    return (
      <main className="App__Main">
        <Filters 
        data={this.props.data}
        />
        {/* <DataList 
        data={this.props.data}
        /> */}
      </main>
    );
  }
}

export default Page;
