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
      userData: [],
      hackingDate: '',
      filteredData: []

    }
    this.GetInputValue = this.GetInputValue.bind(this)
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
          hackingDate: results.date,
          filterValue: '',
          filteredData: results.data
        });
      });
    }

    GetInputValue(event){
      const value = event.currentTarget.value
      const actData = this.state.userData
      .filter(item => {
        if (this.state.filterValue === ''){
          //todos los elementos
          return true;
        } else {
          //email completo introducido:
          // return item.email === this.props.filterValue;
          // comprobar por caracteres:
          return (
          item.email.includes(this.state.filterValue)
          )
        }
      })
      this.setState(prevState => { 
        return {
        filterValue: value,
        filteredData: actData
       };
      })
    }
    
    
  
    

    
    render() {
      // Esto lo ponemos para que no se renderice hasta que el estado no se haya actualizado. 
      if (this.state.userData === undefined) {
        return <div>Espera a los resultados</div>
    }
      console.log(this.state.userData)

    return (
      <div className="App">

        <Header />
        <Page
          userData={this.state.userData}
          filteredData={this.state.filteredData}
          filterValue={this.state.filterValue}
          GetInputValue={this.GetInputValue}
          />
        <Footer 
          date={this.state.hackingDate}/>
      </div>
    );
  }
}

export default App;
