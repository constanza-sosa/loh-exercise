import React from 'react';
import Status from './Status'
import PropTypes from 'prop-types';


class Filters extends React.Component {
  render() {
    const filteredData = this.props.userData.filter(item => {
          return item.email.includes(this.props.filterValue)})
          
    return (
      <React.Fragment>
        <div className="Input__Container">
        <label className="Input__Label" htmlFor="Input">Ingresa tu email para comprobar si estas en la lista</label>
        <input 
        className="Input"
        id="Input"
        type="text"
        onChange={this.props.GetInputValue}
        />
        </div>
      
        <Status 
        filteredData={filteredData}
        />
      </React.Fragment>
    );
  }
}

Filters.propTypes = {
  userData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterValue: PropTypes.string,
  GetInputValue: PropTypes.func
};

export default Filters;
