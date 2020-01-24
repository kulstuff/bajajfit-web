import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import WelcomeWidget from "../../components/WelcomeWidget/WelcomeWidget";
import CurrencyWidget from "../../components/CurrencyWidget/CurrencyWidget";
import BMIWidget from "../../components/BMIWidget/BMIWidget";
import BHIWidget from "../../components/BHIWidget/BHIWidget";
import HeartbeatWidget from "../../components/HeartbeatWidget/HeartbeatWidget";
import ActivityWidget from "../../components/ActivityWidget/ActivityWidget";
import CaloriesWidget from "../../components/CaloriesWidget/CaloriesWidget";
import DataWidget from "../../components/DataWidget/DataWidget";
import AdWidget from "../../components/AdWidget/AdWidget";

import "./Dashboard.scss";

class Dashboard extends Component {
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
          <div className="Position__WelcomeWidget">
            <WelcomeWidget name={this.state.name} />
          </div>
          <div className="Position__CurrencyWidget">
            <CurrencyWidget HP={this.state.hp} BP={this.state.bp} />
          </div>

          <div className="Position__BMIWidget">
            <BMIWidget BMI={this.state.bmi} />
          </div>

          <div className="Position__HeartbeatWidget">
            <HeartbeatWidget BPM={this.state.bpm} />
          </div>

          <div className="Position__BHIWidget">
            <BHIWidget BHI={this.state.bhi} />
          </div>

          <div className="Position__ActivityWidget">
            <ActivityWidget />
          </div>

          <div className="Position__CaloriesWidget">
            <CaloriesWidget
              RecCal={this.state.required_calories}
              LastMeal={this.state.lastmeal_timing}
              Cal={this.state.calories}
            />
          </div>
        </div>
        <div className="Sidebar">
          <div className="Position__DataWidget">
            <DataWidget
              name={this.state.name}
              age={this.state.age}
              weight={this.state.weight}
              height={this.state.height}
              blood={this.state.blood}
              avatar={this.state.img_url}
            />
          </div>
          <div className="Position__AdWidget">
            <AdWidget />
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
