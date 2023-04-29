import React from "react";
import Head from "./Header/Head";
import PriceHouse from "./price/PriceHouse";
import home from "./Home.module.css";
import Setup from "./setup/Setup";
import AirC from "./airC/AirC";
import SuperH from "./superHost/SuperH";
import Friendly from "./Friend/Friendly";
import Response from "./Questions/Response";
import EndingPage from "./AirFooter/EndingPage";
import AreaPlace from "./Imagine/AreaPlace";
import HiddenHome from "./Imagine/HiddenHome";

class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			locationUser: false
		}
		this.see = this.see.bind(this);
		this.home = this.home.bind(this);
	}
	see() {
		this.setState((some) => {
			return {
				locationUser: some.locationUser = true
			}
		})
	}
	home() {
		this.setState((home) => {
			return {
				locationUser: home.locationUser = false
			}
		})
	}
	expend(where, numb) {
		const addSome = document.body.querySelectorAll(".Response_reply__pxdLc"),
			   seeResult = document.body.querySelectorAll(".Response_icon__SPzs4");
			   function goal(id) {
					addSome[id].classList.toggle("append-element");
					seeResult[id].classList.toggle("see-content");
		 }
		switch (where) {
			case "first-q":
				numb = 0;
				break;
			case "second-q":
				numb = 1;
				break;
			case "third-q":
				numb = 2;
				break;
			case "forth-q":
				numb = 3;
				break;
			default:
				numb = 4;
				break;
		}
		return goal(numb)

	}
	render() {
		return (
			<React.Fragment>
				<Piece />
				<Head />
				<PriceHouse locationAction={this.see} />
				<Setup />
				<AirC />
				<SuperH />
				<Friendly />
				{this.state.locationUser ? <AreaPlace backHome={this.home} /> : null}
				{this.state.locationUser && <HiddenHome returnHome={this.home} />}
				<Response expendContent={this.expend} />
				<EndingPage />
			</React.Fragment>
		);
	}
}
export default Home;

export function Piece() {
	return (
		<div className={home.hidden}>
			<h1>airbnb</h1>
		</div>
	);
}
