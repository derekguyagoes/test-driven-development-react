import React from "react";
import { shallow } from "enzyme";
import Header from "../Header";

describe("header", function() {
  let mountedHeader;
  beforeEach(() => {
    mountedHeader = shallow(<Header />);
  });

  it("renders without crashing", () => {
    shallow(<Header/>)
  });

    it("renders a logo", () => {
        const logoImage = mountedHeader.find('img [src="images/wired-brain-coffee-logo.png"]')
        expect(logoImage.length).toBe(1)
    });
});
