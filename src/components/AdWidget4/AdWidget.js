import React from "react";
import "./AdWidget.scss";

let AdWidget4 = props => {
  // let { RecCal, LastMeal, Cal } = props;
  let { insurance_name } = props;
  return (
    <div className="AdWidget">
      <div className="AdWidget__Text1 col col-6">
        Bajaj Allianz {insurance_name} Insurance
      </div>
      <div className="AdWidget__Text2 col col-6">Low Premium Rates</div>
      <div className="AdWidget__Text3 col col-6">Wide Coverage</div>
      <div className="AdWidget__Text4 col col-6"> Always Active Helpline</div>
      <div className="AdWidget__Text5 col col-6">Tax Savings!</div>
      <div className="AdWidget__WhiteBox col col-6">
        <div className="AdWidget__Text6 col col-6">
          Give it a shot using your HP
        </div>
      </div>
      <div className="AdWidget__Image4 col col-6"></div>
    </div>
  );
};

export default AdWidget4;
