import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/addons";
import "../App.css";

const Page = ({ offset, gradient, onClick }) => (
  <React.Fragment>
    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </ParallaxLayer>

    <ParallaxLayer className="landing-page-text landing-page-number" offset={offset} speed={0.3}>
      <span style={{paddingLeft: '250px'}}>0{offset + 1}</span>
    </ParallaxLayer>
  </React.Fragment>
);

class LandingPage extends Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount = async () => {
    let user = await this.props.isLoggedIn();
    if (user.data) {
      this.setState({
        isLoggedIn: true
      });
    }
  };

  componentWillReceiveProps = async () => {
    let user = await this.props.isLoggedIn();
    if (user.data) {
      this.setState({
        isLoggedIn: true
      });
    }
  };

  scroll = to => this.parallax.scrollTo(to);

  render() {
    return (
      <div>
        <div className="ui inverted vertical masthead center aligned segment">
          <div
            style={{ padding: "160px 0px 160px 0px" }}
            className="ui container"
          >
            <h1 style={{ fontSize: "80px" }} className="ui inverted header">
              Original Graphics
            </h1>
            <h2>
              The Best Place For All Your Photography And Videography Needs.
            </h2>
            {this.state.isLoggedIn ? (
              <span />
            ) : (
              <div
                onClick={this.props.showLoginModal}
                className="ui huge primary button"
              >
                Get Started
                <i className="right arrow icon" />
              </div>
            )}
          </div>
        </div>
        {/* <div className="ui vertical stripe segment">
          <div className="ui middle aligned stackable grid container">
            <div className="row">
              <div className="eight wide column">das</div>
            </div>
            <div className="row">
              <div className="six wide right floated column">dasdas</div>
            </div>
          </div>
        </div> */}
        <div style={{ background: "#dfdfdf" }}>
          <Parallax
            className="landing-page-container"
            ref={node => (this.parallax = node)}
            pages={3}
            horizontal
            scrolling={false}
          >
            <Page offset={0} gradient="pink" onClick={() => this.scroll(1)} />
            <Page offset={1} gradient="teal" onClick={() => this.scroll(2)} />
            <Page offset={2} gradient="tomato" onClick={() => this.scroll(0)} />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default LandingPage;
