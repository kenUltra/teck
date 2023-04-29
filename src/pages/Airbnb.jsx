import React from "react";
import AirHeader from "./Airbnb.module.css";
import "./shared.css";
import { getHeaderData as head } from "../util/model";
import { textHeader as texthead } from "../util/model";
import { mobileSize as mobiles } from "../util/model";
import SharedHeadeer from "../Component/SharedHeader";
import HomePage from "../Component/Airbnb_base/Homepage";
import Fixed, { LoadFixed } from "../Component/Airbnb_base/Fixed";
import { Link } from "react-router-dom";
import Home from "../Component/Home";
import CenterH from "../Component/Airbnb_base/CenterHeader";
import End from "../Component/Airbnb_base/End";


class Airbnb extends React.Component {
	constructor() {
		super();
		this.state = {
			middleNav: true,
			headerLoad: true,
			hiddenPar: false,
			isSmalScreem: false,
			middleFirst: [],
			newMiddle: [],
			subnav: [],
			lastText: "",
			textOnce: "",
			textSecond: "",
			textLast: "",
		};
		this.showMiddle = this.showMiddle.bind(this);
		this.screenSize = this.screenSize.bind(this);
		this.home = this.home.bind(this);
		this.mobile = window.matchMedia("only screen and (max-width: 700px)");
	}
	componentDidMount() {
		let last = document.body.querySelector(".search");
		const main = document.body.querySelector(".company");
		const topLevel = document.body.querySelector(".Airbnb_mainText__uGyTL");
		const fixHeader = document.body.querySelector(".Shared_main__1sop6");
		const subHeader = document.body.querySelector(".Shared_subNav__JFgoa");

		this.screenSize();
		const opts = {};
		const makeHeader = new IntersectionObserver((entries, obs) => {
			entries.forEach((element) => {
				if (!element.isIntersecting) {
					fixHeader.classList.add("sticky");
					subHeader.classList.add("sub-sticky");
					this.setState({ hiddenPar: true, changeMiddle: true });
				} else {
					fixHeader.classList.remove("sticky");
					subHeader.classList.remove("sub-sticky");
					this.setState({ hiddenPar: false, changeMiddle: true });
				}
			});
		}, opts);
		makeHeader.observe(topLevel);
		mobiles()
			.then((nav) => {
				this.setState((last) => {
					return {
						headerLoad: (last.headerLoad = false),
						textOnce: (last.textOnce = nav[0]),
						textSecond: (last.textSecond = nav[1]),
						textLast: (last.textLast = nav[2]),
					};
				});
			})
			.catch((err) => {
				console.error(err, "did'nt load");
			});
		head()
			.then((data) => {
				if (last) {
					last.innerHTML = data.searchIcon;
					return;
				} else {
					last = null;
				}
				main.innerHTML = data.logoCompany;
			})
			.catch((err) => {
				return console.error(err, "An error happen during the process");
			});
		texthead()
			.then((arText) => {
				const middleNav = arText[0];
				const endheadText = arText[0][3];
				const reducing = middleNav.slice(0, 3);
				this.setState({ middleFirst: reducing, lastText: endheadText });
			})
			.catch((err) => {
				console.error(err, "cannot find the next data");
			});

	}
	componentWillUnmount() {
		const main = document.body.querySelector(".company");
		head()
			.then((data) => {
				main.innerHTML = data.logoCompany;
			})
			.catch((err) => {
				console.error(err, "sone");
			});
		window.addEventListener('resize', () => {
			const header = document.body.querySelector(".Shared_main__1sop6"),
				middle = document.body.querySelector(".Shared_centerContainer__RC2AY"),
				childNav = document.body.querySelector(".Shared_subNav__JFgoa");
			this.setState(window => {
				if (header.classList.contains("new-head") && middle.classList.contains("remove-content") && childNav.classList.contains("sub-header")) {
					header.classList.remove("new-head");
					middle.classList.remove("remove-content");
					childNav.classList.remove("sub-header")
				}
				return { middleNav: window.middleNav = true }
			})
		})
	}
	componentDidUpdate() {
		let last;
		head()
			.then((data) => {
				last = document.body.querySelector(".search");
				if (last) {
					last.innerHTML = data.searchIcon;

					return;
				} else {
					last = null;
				}
			})
			.catch((err) => {
				console.error(err, "the icon is not found");
			});
	}
	showMiddle() {
		const search = React.createElement("div", { className: "search", key: "once" });

		const list = this.state.middleFirst.map((middle, unic) => {
			return React.createElement(
				"div",
				{ className: "nav-header on" + unic, key: unic },
				<p
					onClick={() => {
						const hideSub = document.querySelector(".Shared_subNav__JFgoa");
						hideSub.classList.add("sub-header");
						this.setState({ middleNav: false });
						if (unic === 0) {
							<h1>Hello form the location</h1>;
						} else {
							console.log("other thing or id", unic);
						}
					}}
				>
					{middle}
				</p>,
				<span></span>
			);
		});
		return [list, search];
	}
	lessScreen() {
		return this.state.headerLoad ? <LoadFixed /> : <Fixed explore={this.state.textOnce} wish={this.state.textSecond} log={this.state.textLast} />;
	}
	screenSize() {
		if (this.mobile.matches) {
			this.setState((last) => {
				return {
					isSmalScreem: (last.isSmalScreem = true),
				};
			});
		}
		window.addEventListener("resize", () => {
			if (this.mobile.matches) {
				this.setState((last) => {
					return {
						isSmalScreem: (last.isSmalScreem = true),
					};
				});
			} else {
				this.setState((last) => {
					return {
						isSmalScreem: (last.isSmalScreem = false),
					};
				});
			}
		});
	}
	home() {
		const heads = document.body.querySelector(".Shared_main__1sop6");
		const shape = document.body.querySelector(".Shared_centerContainer__RC2AY");
		const subHead = document.body.querySelector(".Shared_subNav__JFgoa");
		if (heads.classList.contains("new-head") && subHead.classList.contains("sub-header")) {
			heads.classList.remove("new-head");
			subHead.classList.remove("sub-header");
			shape.classList.remove("remove-content");
		}
		this.setState({ middleNav: true });
	}
	appendMiddle() {
		return <CenterH />;
	}
	render() {
		return (
			<React.Fragment>
				{this.state.isSmalScreem && this.lessScreen()}
				<div className={AirHeader.mainText}>
					<div className={AirHeader.hold}>
						<div className={AirHeader.content}>
							<h1>show total prices up front.</h1>
							<div className={AirHeader.topText}>
								<span>learn more</span>
							</div>
						</div>
					</div>
				</div>

				{this.state.hiddenPar && (
					<div className={AirHeader.hide}>
						<h1>Airbnb company</h1>
					</div>
				)}
				{!this.state.middleNav && <Home home={this.home} />}
				<SharedHeadeer
					firstElement={
						<Link to="/">
							<div className="company"></div>
						</Link>
					}
					secondElemet={this.state.middleNav ? this.showMiddle() : this.appendMiddle()}
				/>

				<HomePage />
				<End />
			</React.Fragment>
		);
	}
}

export default Airbnb;
