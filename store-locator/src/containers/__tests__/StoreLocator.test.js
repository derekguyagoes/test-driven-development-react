import React, { Component } from "react";
import { shallow } from "enzyme";
import StoreLocator from "../StoreLocator";

describe("StoreLocator", function() {
  let mountedStoreLocator;

  beforeEach(() => {
    mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders without crashin", () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
  });

  it("renders a header", () => {
    const headers = mountedStoreLocator.find("Header");
    expect(headers.length).toBe(1);
  });

  it("renders two buttons", () => {
    const buttons = mountedStoreLocator.find("Button");
    expect(buttons.length).toBe(3);
  });

  it("renders a map", () => {
    const map = mountedStoreLocator.find("Map");
    expect(map.length).toBe(1);
  });
});

describe('chooseMap', () => {
    it('updates this.sate.currentMap using the location passed to it', () => {
        let mountedStoreLocator = shallow(<StoreLocator/>)
        let mockEvent = {target:{value:'testland'}}
        mountedStoreLocator.instance().chooseMap(mockEvent)
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png')

    })
})
