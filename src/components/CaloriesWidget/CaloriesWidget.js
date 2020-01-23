import React from "react";
import "./CaloriesWidget.scss";

let CaloriesWidget = props => {
  let { RecCal, LastMeal, Cal } = props;
  return (
    <div className="CaloriesWidget">
      <div className="CaloriesWidget__CaloriesText col col-6">Calories </div>
      <div className="CaloriesWidget__InnerBox col col-6">
        <div className="CaloriesWidget__Recommended col col-6">
          Recommended Calories: {RecCal} Cal/day
        </div>
        <div className="CaloriesWidget__LastMeal col col-6">
          Last Meal Recorded: {LastMeal}PM{" "}
        </div>
        <div className="CaloriesWidget__CalValue col col-6">{Cal} </div>{" "}
        <div className="CaloriesWidget__Cal col col-6">Cal </div>
        <div className="CaloriesWidget__AddMeal col col-6">Add Meal </div>
        <div className="CaloriesWidget__AddButton col col-6"></div>
      </div>
    </div>
  );
};

export default CaloriesWidget;
