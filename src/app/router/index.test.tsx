import React from "react";
import { shallow } from "enzyme";
import router, { Router } from "./index";
import { routerActions } from "./state";

describe("Router", () => {
  it("should route things", () => {
    const wrapper = shallow(
      <Router
        changeRoute={(jest.fn() as unknown) as typeof routerActions.changeRoute}
        currentRoute="home"
      />
    );
    expect(wrapper.find("h1").text()).toEqual("The current page is: home");
  });
});
