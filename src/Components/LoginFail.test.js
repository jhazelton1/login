import React from "react";
import ReactDOM from "react-dom";
import LoginFail from "./LoginFail";

it("renders without crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginFail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
