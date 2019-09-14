import React from 'react'
import DataList from './DataList'
class Status extends React.Component{
  // constructor(props){
  //   super(props)

  //   this.handleChange=this.handleChange.bind(this)
  // }

  // handleChange(){
  //   this.forceUpdate();
  // }
  render() {
    return (
      <React.Fragment>
        <div className="Status"></div>
        <DataList 
        filterValue={this.props.filterValue}
        bulk={this.props.bulk}
        // actionToPerform={this.handleChange}
        />
      </React.Fragment>
    );
  }

}

export default Status;