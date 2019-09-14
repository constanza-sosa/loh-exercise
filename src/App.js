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
  }

  componentDidMount() {
    this.getData();
  }
  getData() {
    fetch(endpoint)
      .then(res=>res.json())
      .then(results => {
        this.setState({
          userData: results.data,
          hackingDate: results.date
        });
      });
    }
    
    
    render() {
      if (this.state.userData === undefined) {
        return <div />
    }
      console.log(this.state.userData)

    return (
      <div className="App">

        <Header />
        <Page
          bulk={this.state.userData}
          />
        <Footer 
          date={this.state.hackingDate}/>
      </div>
    );
  }
}

export default App;
