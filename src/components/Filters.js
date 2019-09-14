import React from 'react';
import Status from './Status'


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
        id="Input"
        type="text"
        onChange={this.GetInputValue}
        />
      
        <Status 
        filterValue={this.state.filterValue}
        bulk={this.props.bulk}
        />
      </React.Fragment>
    );
  }
}

export default Filters;
