import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour";

export default class TourList extends Component {
  state = {
    tours: [],
  };
  render() {
    return (
      <section className="tourlist">
        <Tour />
      </section>
    );
  }
}
