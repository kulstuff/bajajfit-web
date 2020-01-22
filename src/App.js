import React from "react";
import "./App.scss";
import DataWidget from "./components/dataWidget/DataWidget";

let App = () => {
  return (
    <div className="App">
      <DataWidget
        name="Shreyansh Rana"
        age="21"
        weight="69"
        height="182"
        blood="B+"
        avatar="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
      />
    </div>
  );
};

export default App;
