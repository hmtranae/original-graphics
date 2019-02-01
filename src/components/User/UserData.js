import React, { Component } from "react";
import axios from "axios";

export default class UserData extends Component {
  state = {
    users: []
  };

  componentDidMount = async () => {
    const allUserInfo = await axios.get("/api/allUserInfo");
    this.setState({
      users: allUserInfo.data
    });
  };

  render() {
    console.log(this.state.users);
    const { users } = this.state;
    return (
      <div className="column" style={{ padding: "15px 5px 5px 5px" }}>
        <div
          style={{ fontSize: "50px" }}
          className="ui grey center aligned huge header"
        >
          <img
            src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
            alt="company logo"
            style={{ width: "6%" }}
            className="w3-round"
          />
          Original Graphics
          <img
            src="https://image.shutterstock.com/display_pic_with_logo/179108744/718542784/stock-vector-initial-logo-letter-og-with-shield-and-crown-icon-golden-color-isolated-on-black-background-718542784.jpg"
            alt="company logo"
            style={{ width: "6%" }}
            className="w3-round"
          />
        </div>
        <div className="ui text container middle aligned divided list">
          {users.map((user, i) => {
            return (
              <div key={i}>
                <div className="item">
                  <div style={{ float: "right" }}>
                    <a
                      className="ui teal button"
                      href={`mailto:${
                        user.email
                      }?subject=Mail from Original Graphics`}
                    >
                      Contact
                    </a>
                  </div>
                  <div className="content">
                    <div className="ui header">
                      {user.firstName} {user.lastName}
                    </div>
                  </div>
                </div>
                <div style={{ marginBottom: "20px" }} className="ui message">
                  <div className="ui header">Classes Registered For:</div>
                  <div className="ui divider" />
                  {user.classes.map((course, i) => {
                    return (
                      <div key={i}>
                        Taking {course.title}{" "}
                        <span style={{ float: "right" }}>{course.date}</span>
                      </div>
                    );
                  })}
                  <div className="ui divider" />

                  <div style={{ marginTop: "20px " }} className="ui header">
                    Photo Services:
                  </div>

                  <div className="ui divider" />

                  <div style={{ marginTop: "20px " }} className="ui header">
                    Interests:
                    </div>

                    <div className="ui divider" />
                    {user.interests.map((interest, i) => {
                      return (
                        <div key={i}>
                          {interest}
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
