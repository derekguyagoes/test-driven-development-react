import React, { Component } from "react";
import { shallow } from "enzyme";
import Map from "../Map";

describe("map", function() {
  let mountedMap;
  beforeEach(() => {
    mountedMap = shallow(<Map />);
  });
  it("renders without crashin", () => {
    let mountedMap = shallow(<Map />);
  });
  it("contains an image", () => {
    const img = mountedMap.find("img");
    expect(img.length).toBe(1);
  });

  it('displays the none map when no params are given', () => {
      const defaultMap = mountedMap.find('img [src="images/none.png"]');
      expect(defaultMap.length).toBe(1);

  })
});
