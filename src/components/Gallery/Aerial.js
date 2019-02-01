import React, { Component } from "react";
import { Link } from "react-router-dom";

class Aerial extends Component {
  render() {
    return (
      <div className="column" style={{ padding: "15px 5px 5px 5px" }}>
        <div
          style={{ fontSize: "50px" }}
          className="ui grey center aligned huge header"
        >
          Original Graphics
        </div>
        <div className="ui vertical center aligned segment">
          <h1 style={{ fontSize: "40px" }} className="ui header">
            Aerial
          </h1>
        </div>

        <div>
          <div
            style={{ marginBottom: "10px" }}
            className="ui padded vertical center aligned segment"
          >
            <h1 style={{ fontSize: "40px" }} className="ui header">
              <div className="ui sub header">
                Schedule an appointment with us today!
              </div>
            </h1>
          </div>

          <div className="ui container stackable two column centered grid">
            <div style={{paddingLeft: '150px'}} className="column">
              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="prudential building"
                  src="https://cdn.onlyinyourstate.com/wp-content/uploads/2017/08/aer2.jpg"
                />
              </div>

              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="cape coastline"
                  src="http://tse4.mm.bing.net/th?id=OIP.ZxQtMk8Wz1VlkjQFLEAZqQHaE8"
                />
              </div>

              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="maine"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0wObhyRvZHzpTJvUN1Cdp_LBQh_Y9IwXWu8TmZKnYZLYqBMt5bg"
                />
              </div>
            </div>
            <div className="column">
              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="boston skyline"
                  src="https://i0.pickpik.com/photos/227/313/203/boston-massachusetts-skyline-downtown-preview.jpg"
                />
              </div>

              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="city at night"
                  src="https://cdn6.dissolve.com/p/D690_69_004/D690_69_004_1200.jpg"
                />
              </div>

              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="lighthouse"
                  src="https://st3.depositphotos.com/1843631/19217/v/380/depositphotos_192179086-stock-video-aerial-view-boston-light-lighthouse.jpg"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Link to="/contact" className="ui fluid big primary button">
            {" "}
            Book a Session
          </Link>
        </div>
      </div>
    );
  }
}

export default Aerial;
