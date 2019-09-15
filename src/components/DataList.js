import React from 'react';
import DataCard from './DataCard'
import PropTypes from 'prop-types';


class DataList extends React.Component {
  render() {
    
    return (
      <React.Fragment>
        <ul className="User__List">
          {this.props.filteredData
            .map ((item, index) => {
              return(
                <li className="User__Card" key={index}>
                  <DataCard 
                  item= {item} 
                  />
                </li>
            )}
          )}
        </ul>
        </React.Fragment>
    );
  }
}

DataList.propTypes = {
  filteredData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataList;
