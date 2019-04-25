import React from "react";
import ReactDOM from "react-dom";
import HomeContainer from "./HomeContainer";
import { mount, shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<HomeContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("initial state of isVerified is false", () => {
  const wrapper = mount(<HomeContainer />);
  expect(wrapper.state().isVerified).toEqual(false);
});

test("failed login increments loginAttempts", () => {
  const wrapper = mount(<HomeContainer />);
  wrapper.instance().verifyLogin("asd", "asd");
  expect(wrapper.state().loginAttempts).toEqual(1);
});
