import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "green",
  FontSize: "20px",
  border: "1px solid black"
};

// later it can be change as so.
customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}> Hello World!</h1>
    <h1 style={customStyle}> Hello World!</h1>
  </div>,
  document.getElementById("root")
);

// style expectes {color:"red"} js-object. That ojbect however needs to be
// pass into a jsx expression {}.
