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
  render() {
    return (
      <div className="">
        <Navbar />
        <div className="Overlap">
          <div className="Position__WelcomeWidget">
            <WelcomeWidget name="Shreyansh" />
          </div>
          <div className="Position__CurrencyWidget">
            <CurrencyWidget HP="100" BP="900" />
          </div>

          <div className="Position__BMIWidget">
            <BMIWidget BMI="21.7" />
          </div>

          <div className="Position__HeartbeatWidget">
            <HeartbeatWidget BPM="67" />
          </div>

          <div className="Position__BHIWidget">
            <BHIWidget BHI="77" />
          </div>

          <div className="Position__ActivityWidget">
            <ActivityWidget />
          </div>

          <div className="Position__CaloriesWidget">
            <CaloriesWidget RecCal="1900" LastMeal="2" Cal="1100" />
          </div>
        </div>
        <div className="Sidebar">
          <div className="Position__DataWidget">
            <DataWidget
              name="Shreyansh"
              age="19"
              weight="72"
              height="184"
              blood="B+"
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
