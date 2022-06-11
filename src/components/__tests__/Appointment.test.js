import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "components/Appointment";

afterEach(cleanup);

describe("Appoinment", () => {
  it("renders witout crashing", () => {
    render(<Appointment />);
  });
});