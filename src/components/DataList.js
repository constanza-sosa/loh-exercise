import React from 'react';
import DataCard from './DataCard'

class DataList extends React.Component {
  
  render() {
    
    return (
      <React.Fragment>
        <ul className="User__List">
          {this.props.bulk
          .filter(item => {
              if (this.props.filterValue === ''){
                //todos los elementos
                return true;
              } else {
                //email completo introducido:
                // return item.email === this.props.filterValue;
                // comprobar por caracteres:
                return (
                item.email.includes(this.props.filterValue)
                )
              }
            })
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
