import React from 'react';
import DaraCard from './DataCard'

class DataList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="User__List">
          {this.props.data
            .filter(item => {
              if (this.props.filterValue === ''){
                //todos los elementos
                return true;
              } else {
                //email completo introducido:
                // return item.email === this.props.filterValue;
                // comprobar por caracteres:
                return item.email.includes(this.props.filterValue);
              }
            })
            .map (item => {
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
