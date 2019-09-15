import React from 'react';
import logo from './../assets/images/loh.png'

class Header extends React.Component {
  render() {
    return (
      <header className="App__Header">
        <h1 className="App__Header--Title">
          Legion of Hell
        </h1>
        <img src={logo} alt="Legion of Hell"></img>
      </header>
    );
  }
}

export default Header;
