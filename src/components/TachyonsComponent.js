import React from "react";
import ReactDOM from "react-dom";

const TachyonsComponent = () => (
  <div className="dim bg-moon-grey ml2 mt2 mw5 pa2 
                  br2 shadow-1 mb2 dt">
    <h1>TESTING</h1>
  </div>
);

export default TachyonsComponent;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<TachyonsComponent />, wrapper) : false;
