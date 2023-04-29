import React, { Component } from "react";
import "../styles/Lead.css";

class Lead extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="each-section">
          <div className={this.props.content}>
            <div className="title-section">
              <div className="sec-title">
                <h1>{this.props.heroTitle}</h1>
              </div>
              <div className={this.props.btnContainer}>
                <div className="hero-btn-section">
                  <span className="btn-title">
                    <p>show</p>
                  </span>
                  <span className="btn-left" onClick={this.props.slideLeft}>
                    <button>L</button>
                  </span>
                  <span className="btn-right" onClick={this.props.rightSlide}>
                    <button>R</button>
                  </span>
                </div>
              </div>
            </div>
            <div className={this.props.child}>{this.props.children}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Lead.defaultProps = {
  content: "wrap-up-section",
  heroTitle: "New this week",
  btnContainer: "unic-text",
  child: "child-section",
};
export default Lead;
