import "../styles/Lead.css";
import React, { Component } from "react";

class Fast extends Component {
  bg(url) {
    return {
      background: "url(" + url + ")",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="fast-wrap">
          <div className="size-fast">
            <div className="fast-image">
              <div className="image" style={this.bg(this.props.images)}></div>
            </div>

            <div className="fast-detail">
              <div className="likes"></div>
              <div className="detail">
                <div className="rate">
                  <p>
                    <span>
                      {this.props.rate} stars ({this.props.sunC})
                    </span>
                    <span>{" " + this.props.place}</span>
                  </p>
                </div>
                <div className="activity">
                  <p>{this.props.detail}</p>
                </div>
                <div className="price">
                  <p>
                    from ${this.props.price}
                    <span>/ person</span>
                  </p>
                </div>
                <div className="date">
                  <div className="time-am">
                    <span>
                      <p>12</p>
                      <span>:</span>
                      <p>02</p>
                      <p>PM</p>
                    </span>
                  </div>

                  <div className="time-pm">
                    <span>
                      <p>12</p>
                      <span>:</span>
                      <p>02</p>
                      <p>PM</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Fast;
