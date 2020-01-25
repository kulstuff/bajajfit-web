import React from "react";

import "./ShoppingItem.scss";

let ShoppingItem = props => {
  let { item_name, item_price, item_img_url } = props;
  return (
    <div className="ShoppingItem col">
      <div
        className="ShoppingItem__Img"
        style={{ backgroundImage: "url(" + item_img_url + ")" }}
      ></div>
      <div className="ShoppingItem__Name">{item_name}</div>
      <div className="ShoppingItem__Cost">{item_price}</div>
    </div>
  );
};

export default ShoppingItem;
