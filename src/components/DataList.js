import React from 'react';
import DataCard from './DataCard'

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
      }
        </ul>
        </React.Fragment>
    );
  }
}

export default DataList;
