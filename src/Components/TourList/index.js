import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour";
import { tourData } from "../tourData";

export default class TourList extends Component {
  state = {
    tours: tourData,
  };

  handleRemoveTour = (id) => {
    const { tours } = this.state;
    const filteredTour = tours.filter((tour) => tour.id !== id);
    this.setState({
      tours: filteredTour,
    });
  };
  render() {
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map((tour) => {
          return (
            <Tour
              key={tour.id}
              tour={tour}
              handleRemoveTour={this.handleRemoveTour}
            />
          );
        })}
      </section>
    );
  }
}
