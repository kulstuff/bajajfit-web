import React, { Component } from "react";
import Calendar from "react-calendar";
import "./CalendarWidget.scss";

class CalendarWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  render() {
    let Show = date => {
      console.log(date);
    };
    return (
      <div className="test CalendarWidget">
        <Calendar value={this.state.date} onChange={Show} />
      </div>
    );
  }
}

export default CalendarWidget;
