import React, { Component } from "react";

import Navbar from "../../components/Navbar/Navbar";

import CalendarWidget from "../../components/CalendarWidget/CalendarWidget";
import AdWidget from "../../components/AdWidget/AdWidget";
import CurrencyWidget from "../../components/CurrencyWidget/CurrencyWidget";
import ActivityWidget from "../../components/ActivityWidget/ActivityWidget";

import "./Journal.scss";
import CalorieWidgetLarge from "../../components/CalorieWidgetLarge/CalorieWidgetLarge";

class Journal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shreyansh",
      age: "21",
      weight: "72",
      height: "182",
      blood: "B+",
      hp: "100",
      bp: "900",
      bpm: "77",
      bhi: "77",
      bmi: "21.7",
      required_calories: "1900",
      lastmeal_timing: "2 AM",
      calories: "1000",
      img_url: "https://avatarfiles.alphacoders.com/703/70340.jpg"
    };
  }
  render() {
    return (
      <div className="">
        <Navbar />
        <div className="Overlap">
          <div className="Position__CurrencyWidget">
            <CurrencyWidget HP={this.state.hp} BP={this.state.bp} />
          </div>
          <div className="Position__ActivityWidget Position-Journal__ActivityWidget">
            <ActivityWidget />
          </div>
          <div className="Position-Journal__CalorieWidgetLarge">
            <CalorieWidgetLarge
              RecCal={this.state.required_calories}
              Cal={this.state.calories}
            />
          </div>
        </div>
        <div className="Sidebar">
          <div className="Position-Journal__CalendarWidget">
            <CalendarWidget />
          </div>
          <div className="Position__AdWidget">
            <AdWidget />
          </div>
        </div>
      </div>
    );
  }
}
export default Journal;
