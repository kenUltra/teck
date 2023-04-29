import React from "react";
import { hostPage, main } from "../../../util/hostPage";
import price from "./PriceHouse.module.css";

export default class PriceHouse extends React.Component {
	constructor() {
		super();
		this.state = {
			titleName: "",
			subTl: "",
			lastT: "",
			time: "",
			earn: "",
			place: "",
			aboutPlace: "",
			room: "",
			userPlace: "",
			maxEarn: 0,
			money: 200,
		};
		this.change = this.change.bind(this);
	}
	componentDidMount() {
		hostPage()
			.then(icon => {
				const search = document.body.querySelector(".PriceHouse_iconS__4fmLr > span"),
				     inIcon = document.body.querySelector(".PriceHouse_zoomIn__MR-tz > span"),
					 outIcon = document.body.querySelector(".PriceHouse_zoom__LICgh"),
					 lastIcon = outIcon.lastChild;

				search.innerHTML = icon.magnifier;
				inIcon.innerHTML = icon.plusIcon;
				lastIcon.childNodes[0].innerHTML = icon.nimusIcon;
			})
			.catch(err => {
				console.error(err, "The icon can be find anywhere");
			})
		main()
			.then((data) => {
				this.setState((old) => {
					return {
						titleName: (old.titleName = data.title),
						subTl: (old.subTl = data.subtitle),
						lastT: (old.lastT = data.estimation),
						time: (old.time = data.nightHost),
						place: (old.place = data.place),
						aboutPlace: (old.aboutPlace = data.detailPlace),
						room: (old.room = data.room),
						earn: (old.earn = data.Choice),
						userPlace: (old.userPlace = data.location),
						maxEarn: (old.maxEarn = data.maxPrice),
					};
				});
			})
			.catch((err) => {
				console.error(err, "the err");
			});
	}
	change() {
		const a = document.querySelector(".number-slide").value;
		const slideP = document.querySelector(".PriceHouse_current__s6iGJ");
		this.setState((old) => {
			slideP.style.setProperty("--position-slide", Math.floor(old.money / 10) + "%");
			return { money: (old.money = a) };
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className={price.section}>
					<div className={price.earn}>
						<div className={price.once}>
							<div className={price.company}>
								<h1>{this.state.titleName}</h1>
							</div>
							<div className={price.subCompany}>
								<h2>{this.state.subTl}</h2>
							</div>
							<div className={price.range}>
								<div className={price.house}>
									<h3>${this.state.money}</h3>
								</div>
								<div className={price.description}>
									<p>{this.state.time}</p>
									<span>{this.state.lastT}</span>
								</div>
								<div className={price.slice}>
									<div className={price.current}></div>
								</div>
								<div className={price.change}>
									<input type="range" min={0} value={this.state.money} max={this.state.maxEarn} className={"number-slide"} onChange={this.change} />
								</div>
							</div>
							<div className={price.morePrecise}>
								<div className={price.more}>
									<p>{this.state.earn} </p>
								</div>
								<div className={price.place} onClick={this.props.locationAction}>
									<div className={price.iconS}>
										<span></span>
									</div>
									<div className={price.text}>
										<h5>{this.state.place}</h5>
										<div className={price.thing} >
											<p>{this.state.aboutPlace}</p>
											<span>.</span>
											<p>{this.state.room}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={price.twice}>
							<div className={price.map}>
								<div className={price.mapUser}></div>
								<div className={price.action}>
									<div className={price.where}>
										<h1>{this.state.userPlace}</h1>
									</div>
									<div className={price.zoom}>
										<div className={price.zoomIn}>
											<span></span>
										</div>
										
										<div className={price.spacer}>
											<span></span>
										</div>

										<div className={price.zoomOut}>
											<span></span>
										</div>
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
