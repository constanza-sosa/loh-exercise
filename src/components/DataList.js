import React from 'react';
import DaraCard from './DataCard'

class DataList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="User__List">
          {this.props.data
            .map ( item => {
              return(
                <li className="User__Card">
                  <DaraCard 
                  item= {item} />
                </li>
            )}
          )}
        </ul>
        </React.Fragment>
    );
  }
}

export default DataList;
