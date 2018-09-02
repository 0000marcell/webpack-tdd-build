import React from "react";
import ReactDOM from "react-dom";

const TestComponent = () => (
  <div className="dim bg-moon-grey ml2 mt2 mw5 pa2 
                  br2 shadow-1 mb2 dt">
    <h1>TESTING</h1>
  </div>
);

export default TestComponent;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<TestComponent />, wrapper) : false;
