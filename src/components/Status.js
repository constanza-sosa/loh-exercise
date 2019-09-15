import React from 'react'
import DataList from './DataList'
import PropTypes from 'prop-types';

class Status extends React.Component{
  render() {
    const status = this.props.filteredData.length;
    let message = '';
    if(status === 1 ){
      message = `Mostrando ${status} resultado`
    } else{
      message = `Mostrando ${status} resultados`
    }

    return (
      <React.Fragment>
        <div className="Status">{message}</div>
        <DataList 
        filteredData={this.props.filteredData}
        />
      </React.Fragment>
    );
  }

}

Status.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Status;