import React from "react";
import Choices from "../styles/Choice.module.css";

class Choice extends React.Component {
  constructor() {
    super();
    this.state = {
      startData: [],
      activityData: [],
    };
    this.makeUpperCaseOne = this.makeUpperCaseOne.bind(this);
  }
  componentDidMount() {
    fetch("http://localhost:3000/Data/link.json")
      .then((res) => res.json())
      .then((data) => {
        const left = data.notification;
        const right = data.activity;
        this.setState({
          startData: left,
          activityData: right,
        });
      })
      .catch((error) => {
        console.error("on line ", error);
      });
  }
  makeUpperCaseOne(letter) {
    let change = [...letter];
    change[0] = change[0].toUpperCase();
    if (change[0] === " ") {
      change[0] = null;
      change[1] = change[1].toUpperCase();
    }
    return change.join("");
  }
  leftfilterData() {
    const data = this.state.startData.map((thing) => {
      return (
        <LeftFilter key={thing.id} name={this.makeUpperCaseOne(thing.filter)} />
      );
    });
    return data;
  }
  rightfilterData() {
    const data = this.state.activityData.map((others) => {
      return (
        <Rightfilter
          key={others.id}
          activities={this.makeUpperCaseOne(others.act)}
        />
      );
    });
    return data;
  }
  render() {
    return (
      <div className={Choices.slideWrap}>
        <div className={Choices.left}>{this.leftfilterData()}</div>
        <div className={Choices.middle}>
          <span></span>
        </div>
        <div className={Choices.right}>{this.rightfilterData()}</div>
      </div>
    );
  }
}

function LeftFilter({ name }) {
  return (
    <React.Fragment>
      <div className={Choices.once}>
        <p>{name}</p>
      </div>
    </React.Fragment>
  );
}
const Rightfilter = function ({ activities }) {
  return (
    <div className={Choices.twice}>
      <p>{activities}</p>
    </div>
  );
};
export default Choice;
