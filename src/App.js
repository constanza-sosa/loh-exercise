import React from 'react';
import './App.scss';
import data from './components/data'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: data
    }
  }
  render() {
    return (
      <div className="App">
        <ul className="user__list">
          {this.state.userData
            .map ( item => {
              return(
                <li className="user">
                  <h2>{item.name}</h2>
                  <p>{item.email}</p>
                  <ul>
                    {item.passwords
                    .map ( pass => {
                      return(
                      <li>
                        {pass}
                      </li>
                      )} 
                    )}
                  </ul>
                  <ul>
                    {/* preguntar si asi es la mejor forma de pintar objetos dentro de objetos de arrays */}
                    <li>{item.bank.iban}</li>
                    <li>{item.bank.pin}</li>
                  </ul>
                </li>
            )}
          )}
        </ul>
      </div>
    );
  }
}

export default App;
