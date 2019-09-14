import React from 'react';


class DataCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="User__Card--Container">
          <h2 className="User__Card--Name">{this.props.item.name}</h2>
          <p className="User__Card--Email">{this.props.item.email}</p>
          <ul className="User__Card--PasswordsCont">
            {this.props.item.passwords
            .map ( pass => {
              return(
              <li className="User__Card--Passwords">
                {pass}
              </li>
              )} 
            )}
          </ul>
          <ul className="User__Card--BankInfo">
            {/* preguntar si asi es la mejor forma de pintar objetos dentro de objetos de arrays */}
            <li className="User__Card--BankIban">{this.props.item.bank.iban}</li>
            <li className="User__Card--BankPin">{this.props.item.bank.pin}</li>
          </ul>
        </div>
        </React.Fragment>
    );
  }
}

export default DataCard;
