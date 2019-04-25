import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import { shallow, mount, render } from "enzyme";
import {Button} from 'react-bootstrap'

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<LoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders a submit button enabled", () => {
  const wrapper = shallow(<Button disabled={false} />);
  expect(wrapper.prop('disabled')).toEqual(false);
});
