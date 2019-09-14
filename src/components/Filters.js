import React from 'react';
import DataList from './DataList'

class Filters extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterValue: ''
    }
    
    this.GetInputValue = this.GetInputValue.bind(this)
    }

  GetInputValue(event){
    const value = event.currentTarget.value
    this.setState({
      filterValue : value
    })
  }
  render() {
    return (
      <React.Fragment>
        <label className="Input__Label" htmlFor="Input"></label>
        <input 
        className="Input"
        type="text"
        onChange={this.GetInputValue}
        />
        <DataList 
        filterValue={this.state.filterValue}
        data={this.props.data}
        />
      </React.Fragment>
    );
  }
}

export default Filters;
