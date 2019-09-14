import React from 'react';
import DataList from './DataList';

class Page extends React.Component {
  render() {
    return (
      <main className="App__Main">
        <DataList 
        data={this.props.data}
        />
      </main>
    );
  }
}

export default Page;
