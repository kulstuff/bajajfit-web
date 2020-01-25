import React, { Component } from "react";

import "./CalorieWIdgetLarge.scss";

class CalorieWidgetLarge extends Component {
  state = {
    breakfast: [
      { food: "Aloo Paratha", qty: "2", calories: "390" },
      { food: "Curd", qty: "1", calories: "30" },
      { food: "Butter", qty: "1", calories: "100" },
      { food: "Milk", qty: "1", calories: "100" }
    ],
    lunch: [
      { food: "Aloo Paratha", qty: "2", calories: "390" },
      { food: "Curd", qty: "1", calories: "30" },
      { food: "Butter", qty: "1", calories: "100" },
      { food: "Milk", qty: "1", calories: "100" }
    ],
    dinner: [
      { food: "Aloo Paratha", qty: "2", calories: "390" },
      { food: "Curd", qty: "1", calories: "30" },
      { food: "Butter", qty: "1", calories: "100" },
      { food: "Milk", qty: "1", calories: "100" }
    ]
  };
  render() {
    let printFood = item => {
      return (
        <div classname="col-12">
          <div className="CalorieWidgetLarge__Meal col col-4">
            <div className="CalorieWidgetLarge__Item">{item.food}</div>
          </div>

          <div className="CalorieWidgetLarge__Meal col col-2">
            <div className="CalorieWidgetLarge__Item">X</div>
          </div>
          <div className="CalorieWidgetLarge__Meal col col-2">
            <div className="CalorieWidgetLarge__Item">{item.qty}</div>
          </div>
          <div className="CalorieWidgetLarge__Meal col col-4">
            <div className="CalorieWidgetLarge__Item">{item.calories} Cal</div>
          </div>
        </div>
      );
    };

    let { RecCal, Cal } = this.props;
    return (
      <div className="CalorieWidgetLarge">
        <h1 className="CalorieWidgetLarge__Title">Calories</h1>
        <div className="col col-4 CalorieWidgetLarge__Info">
          <div className="CalorieWidgetLarge__Info-Recommended">
            Recommended Calories <br /> {RecCal} Cal
          </div>
          <button className="CalorieWidgetLarge__Add-Meal">
            <ion-icon
              name="add-circle-outline"
              class="CalorieWidgetLarge__Add-Meal-Icon col col-5"
            ></ion-icon>
            <p className="CalorieWidgetLarge__Add-Meal-Text col col-7">
              Add Meal
            </p>
          </button>
          <div className="CalorieWidgetLarge__Total-Calories">{Cal} Cal</div>
        </div>
        <div className="CalorieWidgetLarge__Divider"></div>
        <div className="col col-8 CalorieWidgetLarge__Data">
          <div className="CalorieWidgetLarge__Item-Container">
            <div className="CalorieWidgetLarge__Meal-Title">Breakfast</div>
            {this.state.breakfast.map(printFood)}
          </div>
          <div className="CalorieWidgetLarge__Item-Container">
            <div className="CalorieWidgetLarge__Meal-Title">Lunch</div>
            {this.state.lunch.map(printFood)}
          </div>
          <div className="CalorieWidgetLarge__Item-Container">
            <div className="CalorieWidgetLarge__Meal-Title">Dinner</div>
            {this.state.dinner.map(printFood)}
          </div>
        </div>
      </div>
    );
  }
}

export default CalorieWidgetLarge;
