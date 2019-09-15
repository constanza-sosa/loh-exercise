import React from 'react';
import Filters from './Filters';
import PropTypes from 'prop-types';

class Page extends React.Component {
  render() {
    return (
      <main className="App__Main">
        <Filters 
        userData={this.props.userData}
        filterValue={this.props.filterValue}
        GetInputValue={this.props.GetInputValue}
        />
      </main>
    );
  }
}

Page.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterValue: PropTypes.string,
  GetInputValue: PropTypes.func
};

export default Page;
