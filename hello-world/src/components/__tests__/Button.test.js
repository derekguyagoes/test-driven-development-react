import React, { Component } from "react";
import { shallow } from "enzyme";
import Button from "../Button";

describe("button", function() {
  let mountedButton;
  beforeEach(() => {
    mountedButton = shallow(<Button />);
  });

  it("renders without crashin", () => {
    let mountedButton = shallow(<Button />);
  });

  it('renders a button', () => {
      const button = mountedButton.find('button');
      expect(button.length).toBe(1)
  })
});
