import "../styles/Lead.css";
import React from "react";

class Week extends React.Component {
  constructor() {
    super();
    this.state = {
      firstLetter: "",
    };
    this.sentences = this.sentences.bind(this);
  }
  sentences() {
    const letter = this.props.topText;
    const main = [...letter];
    const t = main[0].toUpperCase();
    main[0] = t;
    return main.join("");
  }
  render() {
    return (
      <React.Fragment>
        <div className="top-hero-week">
          <div className="slide-week">
            <div className="week-image">
              <picture>
                <img src={this.props.imageWeek} alt="beach" />
              </picture>
            </div>
            <div className="week-detail">
              <div className="detail-top">
                <div className="detail-content">
                  <p>Collection</p>
                  <h1>{this.sentences()}</h1>
                </div>
              </div>
              <div className="detail-bottom">
                <span>
                  <button>Show all</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Week;
