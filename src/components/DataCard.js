import React from 'react';
import PropTypes from 'prop-types';


class DataCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="User__Card--Container">
          <h2 className="User__Card--Name">{this.props.item.name}</h2>
          <p className="User__Card--Email">{this.props.item.email}</p>
          <ul className="User__Card--PasswordsCont">
            Contraseñas:
            {this.props.item.passwords
            .map ((pass, index) => {
              return(
              <li className="User__Card--Passwords" key={index}>
                {pass}
              </li>
              )} 
            )}
          </ul>
          <ul className="User__Card--BankInfo">
            Información bancaria:
            {/* preguntar si asi es la mejor forma de pintar objetos dentro de objetos de arrays */}
            <li className="User__Card--BankIban">IBAN: {this.props.item.bank.iban}</li>
            <li className="User__Card--BankPin">PIN:{this.props.item.bank.pin}</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

DataCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default DataCard;
