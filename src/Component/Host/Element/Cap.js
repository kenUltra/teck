import "../styles/Lead.css";
import React from "react";

class Cap extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.inLine = this.inLine.bind(this);
  }
  inLine(url) {
    return {
      background: "url(" + url +")",
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="second-sections-host">
          {/* <div className="second-host-container"> */}
          <div className={this.props.styleOne}>
            <div
              className="image"
              style={this.inLine(this.props.url)}
            ></div>
            <div className="detail">
              <div className="rate">
                <span>5 start (205)</span>
                <span>.{this.props.live}</span>
              </div>
              <div className="kind-activity">
                <p>{this.props.definition}</p>
              </div>
              <div className="price">
                <p>
                  from ${this.props.price} <span>/person</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
Cap.defaultProps = {
  styleOne: "second-host-container"
}
export default Cap;
