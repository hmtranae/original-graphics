import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landscape extends Component {
  render() {
    return (
      <div>
        <div className="column" style={{ padding: "15px 5px 5px 5px" }}>
          <div
            style={{ fontSize: "50px" }}
            className="ui grey center aligned huge header"
          >
            Original Graphics
          </div>
          <div>
            <div className="ui vertical center aligned segment">
              <h1 style={{ fontSize: "40px" }} className="ui header">
                Landscape
              </h1>
            </div>

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
              <div style={{ paddingLeft: "150px" }} className="column">
                <div className="ui medium images">
                  <img
                    className="ui image"
                    alt="fall foliage"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbq4ECj0S1LEtYabWaGiBC1wokDJBshRiMlFUDg7oHmyj5UPAZFw"
                  />
                </div>

                <div className="ui medium images">
                  <img
                    className="ui image"
                    alt="misty morning"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiB63-XPJuL9vFj4Gdzx6vTfMBhrH-HKHv0sv9GKOGPRjHFdA"
                  />
                </div>

                <div className="ui medium images">
                  <img
                    className="ui image"
                    alt="mirror lake"
                    src="https://cdn.oncarrot.com/uploads/sites/12580/2017/12/nh.jpg"
                  />
                </div>
              </div>
              <div className="column">
                <div className="ui medium images">
                  <img
                    className="ui image"
                    alt="winter willows"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1EgZb1O_sYYyLPpvXJsxoEQpieg8njBI-nBUcyXPJriOzio7K"
                  />
                </div>

                <div className="ui medium images">
                  <img
                    className="ui image"
                    alt="esplanade"
                    src="https://media2.trover.com/T/5ac2ddd82c2e91841b06fad7/fixedw_large_4x.jpg"
                  />
                </div>

                <div className="ui medium images">
                  <img
                    className="ui image"
                    alt="sand dunes"
                    src="https://us.123rf.com/450wm/haveseen/haveseen1509/haveseen150900365/44814539-landscape-with-sand-dunes-at-cape-cod-massachusetts-usa-.jpg?ver=6"
                  />
                </div>
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

export default Landscape;
