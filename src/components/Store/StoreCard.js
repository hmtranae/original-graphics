import React, { Component } from "react";
import { Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";

class StoreCard extends Component {
  cardTypeOptions = [
    {
      key: "post-card",
      value: "Post-card",
      text: "Postcard"
    },
    {
      key: "greeting-card",
      value: "Greeting-card",
      text: "Greeting card"
    },
    {
      Key: "invitation-card",
      value: "Invitation-card",
      text: "Invitation card"
    }
  ];

  cardSizeOptions = [
    {
      key: "3.5 x 8.5",
      value: "3.5 x 8.5",
      text: "3.5 x 8.5"
    },
    {
      key: "4 x 6",
      value: "4 x 6",
      text: "4 x 6"
    },
    {
      key: "4.25 x 6",
      value: "4.25 x 6",
      text: "4.25 x 6"
    },
    {
      key: "4 x 9",
      value: "4 x 9",
      text: "4 x 9"
    },
    {
      key: "5 x 7",
      value: "5 x 7",
      text: "5 x 7"
    },
    {
      key: "5.5 x 8.5",
      value: "5.5 x 8.5",
      text: "5.5 x 8.5"
    },
    {
      key: "6 x 8",
      value: "6 x 8",
      text: "6 x 8"
    },
    {
      key: "6 x 9",
      value: "6 x 9",
      text: "6 x 9"
    },
    {
      key: "6 x 11",
      value: "6 x 11",
      text: "6 x 11"
    },
    {
      key: "custom",
      value: "Custom",
      text: "Custom"
    }
  ];

  cardThemeOptions = [
    {
      key: "new-year",
      value: "New-Year",
      text: "New Year"
    },
    {
      key: "easter",
      value: "Easter",
      text: "Easter"
    },
    {
      key: "halloween",
      value: "Halloween",
      text: "Halloween"
    },
    {
      key: "thanksgiving",
      value: "Thanksgiving",
      text: "Thanksgiving"
    },
    {
      key: "christmas",
      value: "Christmas",
      text: "Christmas"
    },
    {
      key: "custom",
      value: "Custom",
      text: "Custom"
    }
  ];

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

          <div className="ui vertical center aligned segment">
            <h1 style={{ fontSize: "40px" }} className="ui header">
              Card Options
            </h1>
          </div>
        </div>

        <div>
          <div className="ui padded vertical center aligned segment">
            <h1 style={{ fontSize: "40px" }} className="ui header">
              <div className="ui sub header">
                Select the options below to create your own unique theme or
                custom cards.
              </div>
            </h1>
          </div>

          <div>
            <div className="ui large images">
              <img
                className="ui image"
                alt="card options"
                src="https://pc-alc.imgix.net/alc/2018/11/06/19/54/29/35eff645-da36-406a-998d-6c1feaab84b6/hero_55-width_holiday_444444_v2.jpg?auto=format&ch=Width&dpr=2.63&fit=crop&h=310&ixjsv=1.2.0&q=38&w=420"
              />
            </div>
          </div>

          <div style={{ paddingBottom: "10px" }} className="ui form">
            <div className="field">
              <Dropdown
                placeholder="Type"
                fluid
                name="test"
                multiple
                selection
                options={this.cardTypeOptions}
                onChange={this.onDropdownInputChange}
              />
            </div>
          </div>

          <div style={{ paddingBottom: "10px" }} className="ui form">
            <div className="field">
              <Dropdown
                placeholder="Size"
                fluid
                name="test"
                multiple
                selection
                options={this.cardSizeOptions}
                onChange={this.onDropdownInputChange}
              />
            </div>
          </div>

          <div style={{ paddingBottom: "10px" }} className="ui form">
            <div className="field">
              <Dropdown
                placeholder="Theme"
                fluid
                name="test"
                multiple
                selection
                options={this.cardThemeOptions}
                onChange={this.onDropdownInputChange}
              />

              <Link to="/contact" className="ui fluid big primary button">
                {" "}
                Order Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreCard;
