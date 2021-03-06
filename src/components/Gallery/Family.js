import React, { Component } from "react";
import { Link } from "react-router-dom";

class Family extends Component {
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
        </div>

        <div className="ui vertical center aligned segment">
          <h1 style={{ fontSize: "40px" }} className="ui header">
            Family
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
                  alt="family generations"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY859d2HZzcc_fO-hZ0Mf-FS_X1Rd0pls6kMOh2UqX20sJKVOzEA"
                />
              </div>

              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="family sunny day"
                  src="https://www.condoncharles.com.au/wp-content/uploads/2016/06/family-pictures-19-300x200.jpg"
                />
              </div>

              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="family love"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmLBG2qYPoS31N_Ht10D2uIw2ucbQATvHMbfe6x3eyDciJg99ZA"
                />
              </div>
            </div>
            <div className="column">
              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="family vacation"
                  src="https://www.palazzodelvicere.com/wp-content/uploads/2018/03/family-mob.jpg"
                />
              </div>

              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="a child's love"
                  src="https://violencefreefamilies.org.au/web/wp-content/uploads/2015/08/father-and-daughter-1.jpg"
                />
              </div>

              <div className="ui medium images">
                <img
                  className="ui image"
                  alt="family beach"
                  src="http://tadalafilforsale.net/data/media/54/57735623.jpg"
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
export default Family;
