import React, { Component } from "react";

import Navbar from "../../components/Navbar/Navbar";

import AdWidget from "../../components/AdWidget/AdWidget";
import CurrencyWidget from "../../components/CurrencyWidget/CurrencyWidget";

import "./Tasks.scss";
import TaskWidget from "../../components/TaskWidget/TaskWidget";
import LeaderBoardWidget from "../../components/LeaderboardWidget/LeaderBoardWidget";

class Tasks extends Component {
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
      img_url: "https://avatarfiles.alphacoders.com/703/70340.jpg",
      systemtasks: [
        {
          targetText: "Walk 2000 Steps",
          progress: "100",
          target: "2000",
          hp: "10",
          bp: "10"
        },
        {
          targetText: "Dance 200 Times",
          progress: "100",
          target: "200",
          hp: "10",
          bp: "10"
        },
        {
          targetText: "Take Heartbeat 5 Times",
          progress: "1",
          target: "5",
          hp: "5",
          bp: "5"
        },
        {
          targetText: "Record Calories 3 Times",
          progress: "2",
          target: "3",
          hp: "5",
          bp: "5"
        }
      ],
      friendstasks: [
        {
          targetText: "Walk 2000 Steps",
          progress: "100",
          target: "2000",
          hp: "10",
          bp: "10",
          sender: "Ekansj"
        },
        {
          targetText: "Dance 200 Times",
          progress: "100",
          target: "200",
          hp: "10",
          bp: "10",
          sender: "Aman"
        },
        {
          targetText: "Take Heartbeat 5 Times",
          progress: "1",
          target: "5",
          hp: "5",
          bp: "5",
          sender: "Suveer"
        }
      ]
    };
  }
  render() {
    let renderTasks = item => {
      return (
        <div className="col" style={{ width: "18%" }}>
          <TaskWidget
            targetText={item.targetText}
            progress={item.progress}
            target={item.target}
            hp={item.hp}
            bp={item.bp}
            sender={item.sender}
          />
        </div>
      );
    };
    return (
      <div className="">
        <Navbar />
        <div className="Overlap">
          <div className="Position__CurrencyWidget">
            <CurrencyWidget HP={this.state.hp} BP={this.state.bp} />
          </div>
          <div className="Position__SystemTasks clearfix">
            <h1 className="Position__Task-Title">Daily Tasks</h1>
            {this.state.systemtasks.map(renderTasks)}
          </div>
          <div className="Position__SystemTasks clearfix">
            <h1 className="Position__Task-Title">Friends Tasks</h1>
            {this.state.friendstasks.map(renderTasks)}
          </div>
        </div>
        <div className="Sidebar">
        <div className="Position__LeaderboardWidget" >
            <LeaderBoardWidget Name1="Aditya" HP1="6900" Name2="Akash" HP2="6000" Name3="Rohit" HP3="3000" Name4="Sushant" HP4="2000" Name5="Shruti" HP5="1500"/>
          </div>
          <div className="Position__AdWidget">
            <AdWidget />
          </div>
        </div>
      </div>
    );
  }
}
export default Tasks;
