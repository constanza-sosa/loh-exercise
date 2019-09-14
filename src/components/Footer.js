import React from 'react';


class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: '0:0:0'

    };
    setInterval(()=>{this.upDateClock()}, 1000);
  }

  upDateClock(){
    const newDate = new Date ();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();
    let session = "AM";

    if(hour === 0){
      hour = 12;
    }
  
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
  
    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    const actualTime = hour + ':' + minutes + ':' + seconds + ' ' + session;
    this.setState({
      time: actualTime
    })
  }
  render() {
    return (
      <footer className="App__Footer">
        <p>loh()</p>
        <p>{this.state.time}</p>
        <p>{this.props.date}</p>
      </footer>
    );
  }
}

export default Footer;
