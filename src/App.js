import React from 'react';
import './App.scss';
// import data from './components/data'
import Header from './components/Header'
import Page from './components/Page'
import Footer from './components/Footer'

const endpoint = 'https://raw.githubusercontent.com/Adalab/m3-tutoria-2/master/assets/data/bulk.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // userData: []
    }
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch(endpoint)
      .then(res=>res.json())
      .then(data => {
        this.setState({
          userData: data.data
        });
      });
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
