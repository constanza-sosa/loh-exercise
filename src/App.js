import React from 'react';
import './App.scss';
import data from './components/data'
import Header from './components/Header'
import Page from './components/Page'
import Footer from './components/Footer'

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
        <Header />
        <Page 
        data={this.state.userData}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
